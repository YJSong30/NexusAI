import uvicorn
from fastapi import FastAPI, HTTPException, Body
import boto3
import json
from dotenv import load_dotenv
import os
import base64
from PIL import Image
from io import BytesIO
from fastapi.middleware.cors import CORSMiddleware
# import matplotlib.pyplot as plt

import schemas

load_dotenv(dotenv_path='./.env')
aws_configs = {
    'ACCESS_KEY_ID': os.getenv("AWS_ACCESS_KEY_ID"),
    'SECRET_ACCESS_KEY': os.getenv("AWS_SECRET_ACCESS_KEY"),
    'SAGEMAKER_ENDPOINT': os.getenv('SAGEMAKER_ENDPOINT'),
    'REGION': os.getenv('AWS_REGION')
}

# Verify configurations before running server
for config, val in aws_configs.items():
    if not val:
        raise Exception(f'Missing AWS config "{config}". Make sure to setup `.env` file')

# initialize sagemaker client
sagemaker = boto3.client(
    'sagemaker-runtime',
    region_name=aws_configs['REGION'],
    aws_access_key_id=aws_configs['ACCESS_KEY_ID'],
    aws_secret_access_key=aws_configs['SECRET_ACCESS_KEY']
)

app = FastAPI()

# Add CORS middleware to allow requests from frontend

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)


@app.get("/")
def read_root():
    return {"message": "Welcome to Stable Diffussers API"}

# endpoint to test the frontend and backend
@app.get("/api")
async def root():
    return {"message": "Welcome to the Demo of StableDiffusers with FastAPI"}

def decode_base64_image(image_string: str):
    """
    Decode base64 string to image
    
    params:
        - image_string: base64 string from Sagemaker Endpoint to be decoded
    """
    base64_image = base64.b64decode(image_string)
    buffer = BytesIO(base64_image)
    return Image.open(buffer)

# called when POST request is made to the /generate-image/ endpoint
@app.post("/generate-image")
async def generate_image(request_data: schemas.PromptRequest = Body(...)):
    prompt = request_data.prompt
    print("received prompt: ", prompt)
    return {'prompt': prompt}

    # prompt = request_data.prompt

    # print("received prompt: ", prompt)
    # try:
    #     num_images_per_prompt = 1
    #     payload = {
    #         "inputs": prompt,
    #         "num_images_per_prompt": num_images_per_prompt
    #     }
    #     serialized_payload = json.dumps(payload)
    #     # print("Serialized payload:", serialized_payload)

    #     response = sagemaker.invoke_endpoint(
    #         EndpointName=aws_configs['SAGEMAKER_ENDPOINT'],
    #         Body=serialized_payload,
    #         ContentType='application/json'
    #     )
    #     # print(response)

    #     response_payload = json.loads(response['Body'].read().decode("utf-8"))
    #     # print(response_payload)

    #     return response_payload

    # except Exception as e:
    #     raise HTTPException(status_code=500, detail=str(e))

# Run the FastAPI server
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8081)