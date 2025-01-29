from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import logging
import traceback
import google.generativeai as genai

app = FastAPI()
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

genai.configure(api_key="") #key
class QuestionRequest(BaseModel):
    question: str
@app.post("/ask_question/")
async def ask_question(request: QuestionRequest):
    """
    Endpoint to receive a question from the user and send it to Google Gemini API for an answer.
    
    Args:
        request (QuestionRequest): The request body containing the user's question.
    
    Returns:
        dict: A dictionary with the answer from the Gemini API.
    """
    question = request.question

    try:
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(question)
        if response and response.text:
            return {"answer": response.text}
        else:
            raise HTTPException(status_code=404, detail="No answer found.")
    
    except Exception as e:
        logging.error(f"Error occurred: {str(e)}")
        logging.error(traceback.format_exc())
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
