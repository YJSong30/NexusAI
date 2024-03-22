from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse, JSONResponse
import fastapi as _fapi
import boto3
import json
from dotenv import load_dotenv
import schemas as _schemas
import services as _services
import io
import os

load_dotenv()


app = FastAPI()

SAGEMAKER_ENDPOINT = os.getenv('SAGEMAKER_ENDPOINT')
AWS_REGION = os.getenv('AWS_REGION')

# initialize sagemaker client
sagemaker = boto3.client('sagemaker-runtime', region_name='AWS_REGION')


@app.get("/")
def read_root():
    return {"message": "Welcome to Stable Diffussers API"}


# endpoint to test the frontend and backend
@app.get("/api")
async def root():
    return {"message": "Welcome to the Demo of StableDiffusers with FastAPI"}


# called when POST request is made to the /generate-image/ endpoint
@app.post("/generate-image/")
async def generate_image(prompt: str):
    try:
        content_type = "application/json"
        data = json.dumps({"text": prompt})

        response = sagemaker.invoke_endpoint(
            EndpointName=SAGEMAKER_ENDPOINT,
            ContentType=content_type,
            Body=data
        )

        image_bytes = response["Body"].read()
        
        image_file = io.BytesIO(image_bytes)

        return StreamingResponse(image_file, media_type="image/png")
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


