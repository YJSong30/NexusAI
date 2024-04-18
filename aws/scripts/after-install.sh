#!/bin/bash
# after-install.sh: run server after installation

# Retrieve secrets from AWS Secrets Manager
SECRET_VALUE=$(aws secretsmanager get-secret-value --secret-id my-secret --query SecretString --output text)

# Parse the JSON string to extract environment variables and export env vars
export AWS_ACCESS_KEY_ID='${{ secrets.AWS_ACCESS_KEY_ID }}'
export AWS_SECRET_ACCESS_KEY='${{ secrets.AWS_SECRET_ACCESS_KEY }}'
export SAGEMAKER_ENDPOINT="test"
export AWS_REGION=us-west-1

cd /home/ubuntu/app

# Verify docker-compose.yml location
if [! -f docker-compose.yml ]; then 
    echo "Could not find `docker-compose.yml` file in /home/ubuntu/app."
    exit 1
fi

# Start docker compose services
docker compose up -d

# Check if docker compose command ran successfully
if [$? -ne 0 ]; then
    echo "Failed to start Docker Compose services"
    exit 1
fi

# Give some time before verifying service status
sleep 10

