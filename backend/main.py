from fastapi import FastAPI, HTTPException, Body
from fastapi.responses import StreamingResponse, JSONResponse
import fastapi as _fapi
import boto3
import json
from dotenv import load_dotenv
import schemas as _schemas
import services as _services
import io
import os
import base64
from PIL import Image
from io import BytesIO
from pydantic import BaseModel
# import matplotlib.pyplot as plt


load_dotenv()

app = FastAPI()

AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")

SAGEMAKER_ENDPOINT = os.getenv('SAGEMAKER_ENDPOINT')
AWS_REGION = os.getenv('AWS_REGION')


# initialize sagemaker client
sagemaker = boto3.client('sagemaker-runtime', region_name=AWS_REGION)


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


# def display_images(images=None, columns=3, width=100, height=100):
#     plt.figure(figsize=(width, height))
#     for i, image in enumerate(images):
#         plt.subplot(int(len(images) / columns + 1), columns, i + 1)
#         plt.axis('off')
#         plt.imshow(image)


class PromptRequest(BaseModel):
    prompt: str


# called when POST request is made to the /generate-image/ endpoint
@app.post("/generate-image/")
async def generate_image(request_data: PromptRequest = Body(...)):
    prompt = request_data.prompt
    try:
        
        num_images_per_prompt = 1
        payload = {
            "inputs": prompt,
            "num_images_per_prompt": num_images_per_prompt
        }
        serialized_payload = json.dumps(payload)

        
        response = sagemaker.invoke_endpoint(
            EndpointName=os.getenv('SAGEMAKER_ENDPOINT'),
            Body=serialized_payload,
            ContentType='application/json'
        )

        response_payload = json.loads(response['Body'].read().decode("utf-8"))

        # Decode images
        decoded_images = [decode_base64_image(image) for image in response_payload["generated_images"]]

        # Visualize generation
        # display_images(decoded_images)

        base64_images = [base64.b64encode(image_file.getvalue()).decode('utf-8') for image_file in [BytesIO(image.tobytes()) for image in decoded_images]]
        return {"generated_images": base64_images}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))