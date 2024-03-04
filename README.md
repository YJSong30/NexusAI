# NexusAI

## Overview
NexusAI is a full-stack web application designed to enable users to generate their own 2D backgrounds using a model that we trained and implemented into our project.
Our application provides a friendly user interface where users can specify their preferences for the background they wish to generate.

## Implementation
This full-stack project utilizes different technologies for the frontend and backend. For the frontend we are using React, which communicates with the
FastAPI backend through HTTP requests. The backend then interacts with the AWS SageMaker endpoint, where the model that we trained is deployed. 

## Getting Started

### Backend
1. Create virtual environment
- UNIX
    ```
    python3 -m venv .venv
    ```
- Windows cmd
    ```
    c:\>Python35\python -m venv .venv
    ```

2. Activate venv
- UNIX
    ```
    source .venv/bin/activate
    ```
- Windows cmd
    ```
    .venv\Scripts\activate.bat
    ```

3. Install all dependencies in `requirements.txt`
```
pip install -r requirements.txt
```


4. Start uvicorn server
```
uvicorn main:app
```

### Frontend
1. Install npm packages
```
npm install
```

2. Serve React app
```
npm run start
```