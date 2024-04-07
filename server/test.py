import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_community.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain, SimpleSequentialChain
import dotenv

dotenv.load_dotenv()

app = Flask(__name__)
CORS(app)

os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")


@app.route('/langai', methods=['POST'])
def get_message():
    data = request.get_json()
    sentence = data['sentence']

    title_template_first = PromptTemplate(
        input_variables=['topic'],
        template='Write the correct sentence only: {topic}'
    )
    script_template_first = PromptTemplate(
        input_variables=['title'],
        template='Analyze the paragraph titled "{title}" below, focusing on the grammatical structure and tense of each line. Provide the analysis for each line as follows:\nPara Line 1:\nTense:\nSentence structure:\n{title}'
    )
    title_template_second = PromptTemplate(
        input_variables=['topic'],
        template='Write the correct sentence only: {topic}'
    )
    audio_template_second = PromptTemplate(
        input_variables=['title'],
        template='{title}'
    )
    llm = OpenAI(temperature=0.9)
    title_chain_first = LLMChain(
        llm=llm, prompt=title_template_first, verbose=True)
    script_chain_first = LLMChain(
        llm=llm, prompt=script_template_first, verbose=True)
    title_chain_second = LLMChain(
        llm=llm, prompt=title_template_second, verbose=True)
    first_sequence = SimpleSequentialChain(
        chains=[title_chain_first, script_chain_first], verbose=True)
    second_sequence = SimpleSequentialChain(
        chains=[title_chain_second], verbose=True)
    response_title_first = title_chain_first.run(topic=sentence)
    response_script_first = script_chain_first.run(
        title=response_title_first)

    if sentence:
        return jsonify({'structure': response_script_first, 'correct': response_title_first})
    else:
        return jsonify({'error': 'sentence not provided'}), 400


if __name__ == '__main__':
    app.run(debug=True)
