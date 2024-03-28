import uvicorn
from fastapi import FastAPI, HTTPException, Body
import boto3
import json
from dotenv import load_dotenv
import os
import base64
from PIL import Image
from io import BytesIO
from pydantic import BaseModel
# import matplotlib.pyplot as plt

load_dotenv(dotenv_path='./.env')
aws_configs = {
    'AWS_ACCESS_KEY_ID': os.getenv("AWS_ACCESS_KEY_ID"),
    'AWS_SECRET_ACCESS_KEY': os.getenv("AWS_SECRET_ACCESS_KEY"),
    'SAGEMAKER_ENDPOINT': os.getenv('SAGEMAKER_ENDPOINT'),
    'AWS_REGION': os.getenv('AWS_REGION')
}

# Verify configurations before running server
for config, val in aws_configs.items():
    if not val:
        raise Exception(f'Missing AWS config "{config}". Make sure to setup `.env` file')

# initialize sagemaker client
sagemaker = boto3.client('sagemaker-runtime')

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Welcome to Stable Diffussers API"}

# endpoint to test the frontend and backend
@app.get("/api")
async def root():
    return {"message": "Welcome to the Demo of StableDiffusers with FastAPI"}

def decode_base64_image(image_string):
    base64_image = base64.b64decode(image_string)
    buffer = BytesIO(base64_image)
    return Image.open(buffer)


class PromptRequest(BaseModel):
    prompt: str

# called when POST request is made to the /generate-image/ endpoint
@app.post("/generate-image")
async def generate_image(request_data: PromptRequest = Body(...)):
    prompt = request_data.prompt

    print("received prompt: ", prompt)
    try:
        num_images_per_prompt = 1
        payload = {
            "inputs": prompt,
            "num_images_per_prompt": num_images_per_prompt
        }
        serialized_payload = json.dumps(payload)
        print("Serialized payload:", serialized_payload)

        response = sagemaker.invoke_endpoint(
            EndpointName=aws_configs['SAGEMAKER_ENDPOINT'],
            Body=serialized_payload,
            ContentType='application/json',
            EnableExplanations='`true`'
        )
        print(response)

        response_payload = json.loads(response['Body'].read().decode("utf-8"))

        # Decode images
        decoded_images = [decode_base64_image(image) for image in response_payload["generated_images"]]

        # Visualize generation
        # display_images(decoded_images)

        base64_images = [base64.b64encode(image_file.getvalue()).decode('utf-8') for image_file in [BytesIO(image.tobytes()) for image in decoded_images]]
        return {"generated_images": base64_images}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Run the FastAPI server
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)