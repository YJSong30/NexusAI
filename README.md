# NexusAI

## Overview
NexusAI is a full-stack web application designed to enable users to generate their own 2D backgrounds using a model that we trained and implemented into our project.
Our application provides a friendly user interface where users can specify their preferences for the background they wish to generate.

## Implementation
This full-stack project utilizes different technologies for the frontend and backend. For the frontend we are using React, which communicates with the
FastAPI backend through HTTP requests. The backend then interacts with the AWS SageMaker endpoint, where the model that we trained is deployed. 

## Getting Started
### Prerequisites
- Docker

### Local dev setup
1. Setup `.env` file in the `/backend` directory with the AWS configurations:
    ```
    AWS_ACCESS_KEY_ID=<access-key>
    AWS_SECRET_ACCESS_KEY=<secret-access-key>
    SAGEMAKER_ENDPOINT=<sagemaker-api-endpoint>
    AWS_REGION=<region>
    ```

2. Start docker containers with `docker compose`
    - Start docker services
        ```
        docker compose up
        ```

    - Stop docker services
        ```
        docker compose down
        ```

## Contributors