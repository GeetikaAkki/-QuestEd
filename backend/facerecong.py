from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import cv2
import numpy as np
import base64
import google.generativeai as genai
import logging
import traceback
from google.generativeai.types import Content, ImagePart

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
class ImageData(BaseModel):
    image: str 

@app.post("/analyze_emotion/")
async def analyze_emotion(data: ImageData):
    """
    Endpoint to analyze emotion from a base64 encoded image using the Gemini API.
    
    Args:
        data (ImageData): The request body containing the base64 encoded image.
    
    Returns:
        dict: A dictionary with the detected emotions or an error message.
    """
    try:
        image_bytes = base64.b64decode(data.image)
        np_arr = np.frombuffer(image_bytes, np.uint8)
        image = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

        if image is None:
            raise HTTPException(status_code=400, detail="Invalid image format.")
    except Exception as e:
        logging.error(f"Error decoding image: {str(e)}")
        raise HTTPException(status_code=400, detail="Invalid base64 image format.")
    
    try:
        img_part = ImagePart.from_bytes(image_bytes, mime_type="image/jpeg")
        content = Content(parts=[img_part])
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(content)
        if response and response.text:
            return {"emotions": response.text}
        else:
            raise HTTPException(status_code=404, detail="No emotions detected.")
    
    except Exception as e:
        logging.error(f"Error occurred while generating content: {str(e)}")
        logging.error(traceback.format_exc())
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
