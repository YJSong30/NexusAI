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
    - Start docker services:
        ```
        docker compose up
        ```

    - Stop docker services:
        ```
        docker compose down
        ```
   - If you made changes to the `Dockerfiles` or `docker-compose.yml`:
        ```
        docker compose down
        docker compose up --build  # rebuild services with changes
        ```

## Website Preview
![9c6421ec43f6c8f6d3543bb955c535f9](https://github.com/YJSong30/NexusAI/assets/76021136/e2d125b9-7367-492c-a5f5-09ed77ffda3c)
![170fc540a1e21cc3d25a3ee0f216d545](https://github.com/YJSong30/NexusAI/assets/76021136/3b0eb560-f17f-46ce-aa44-1652e3053fd9)
![daddf51e26d10c46508696f2104929d8](https://github.com/YJSong30/NexusAI/assets/76021136/d8eab3e5-b310-49f6-bd79-38e71708c4a4)
![b3b128cdb1fa63431d23ed29e1b8f79a](https://github.com/YJSong30/NexusAI/assets/76021136/e0ee1a36-15c4-4976-823c-878ee7bf36ae)
![cd121150f6011ef72f58d32c0473842e](https://github.com/YJSong30/NexusAI/assets/76021136/41b8e9e9-b9a6-4e6b-bfd8-9c6cac67fe60)


## Contributors
