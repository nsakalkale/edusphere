# Import os to set API key
import os
# Import OpenAI as main LLM service
from langchain.llms import OpenAI
from langchain.embeddings import OpenAIEmbeddings
# Bring in streamlit for UI/app interface
import streamlit as st

# Import PDF document loaders...there's other ones as well!
from langchain.document_loaders import PyPDFLoader

# Set API key for OpenAI Service
# Can substitute this out for other LLM providers
os.environ['OPENAI_API_KEY'] = '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'

# Create instance of OpenAI LLM
llm = OpenAI(temperature=0.1, verbose=True)
embeddings = OpenAIEmbeddings()

# Create and load PDF Loader
loader = PyPDFLoader(r'C:\Users\Saket\OneDrive\Desktop\Langchain\transformer.pdf')
# Split pages from pdf 
pages = loader.load_and_split()

st.title('🦜🔗 GPT Investment Banker')
# Create a text input box for the user
prompt = st.text_input('Input your prompt here')

# If the user hits enter
if prompt:
    # Convert the prompt to a vector
    prompt_embedding = embeddings.encode(prompt)
    # Generate response from LLM
    response = llm(prompt)
    # Write out the response
    st.write(response)

    # With a streamlit expander  
    with st.expander('Document Similarity Search'):
        # Find the relevant pages
        similarity_scores = []
        for page in pages:
            page_embedding = embeddings.encode(page)
            similarity_score = embeddings.cosine_similarity(prompt_embedding, page_embedding)
            similarity_scores.append((page, similarity_score))
        
        # Sort the pages by similarity score
        similarity_scores.sort(key=lambda x: x[1], reverse=True)

        # Write out the most similar page
        st.write(similarity_scores[0][0])
