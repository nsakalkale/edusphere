const express = require("express");
const cors = require("cors");
const { OpenAI } = require("langchain_community/llms");
const { PromptTemplate } = require("langchain/prompts");
const { LLMChain, SimpleSequentialChain } = require("langchain/chains");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const { OPENAI_API_KEY } = process.env;
const llm = new OpenAI(OPENAI_API_KEY, { temperature: 0.9 });

app.get("/", (req, res) => {
  res.send("IT'S HOME!!!");
});

app.post("/langai", async (req, res) => {
  try {
    const { sentence } = req.body;

    const titleTemplateFirst = new PromptTemplate({
      inputVariables: ["topic"],
      template: "Write the correct sentence only: {topic}",
    });

    const scriptTemplateFirst = new PromptTemplate({
      inputVariables: ["title"],
      template:
        'Analyze the paragraph titled "{title}" below, focusing on the grammatical structure and tense of each line. Provide the analysis for each line as follows:\nPara Line 1:\nTense:\nSentence structure:\n{title}',
    });

    const titleTemplateSecond = new PromptTemplate({
      inputVariables: ["topic"],
      template: "Write the correct sentence only: {topic}",
    });

    const audioTemplateSecond = new PromptTemplate({
      inputVariables: ["title"],
      template: "{title}",
    });

    const titleChainFirst = new LLMChain({
      llm,
      prompt: titleTemplateFirst,
      verbose: true,
    });

    const scriptChainFirst = new LLMChain({
      llm,
      prompt: scriptTemplateFirst,
      verbose: true,
    });

    const titleChainSecond = new LLMChain({
      llm,
      prompt: titleTemplateSecond,
      verbose: true,
    });

    const firstSequence = new SimpleSequentialChain({
      chains: [titleChainFirst, scriptChainFirst],
      verbose: true,
    });

    const secondSequence = new SimpleSequentialChain({
      chains: [titleChainSecond],
      verbose: true,
    });

    const responseTitleFirst = await titleChainFirst.run({ topic: sentence });
    const responseScriptFirst = await scriptChainFirst.run({
      title: responseTitleFirst,
    });

    if (sentence) {
      res.json({
        structure: responseScriptFirst,
        correct: responseTitleFirst,
      });
    } else {
      res.status(400).json({ error: "Sentence not provided" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
