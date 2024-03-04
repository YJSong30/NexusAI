from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
import fastapi as _fapi
import boto3
import json

import schemas as _schemas
import services as _services
import io

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to Stable Diffussers API"}

# Endpoint to test the Front-end and backend
@app.get("/api")
async def root():
    return {"message": "Welcome to the Demo of StableDiffusers with FastAPI"}

@app.post("/generate-image/")
async def generate_image(prompt: str):
    # client = boto3.client

