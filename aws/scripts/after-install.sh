#!/bin/bash
# after-install.sh: run server after installation
date >> ~/log

# Export github secrets as environment variables if not set
if [ -z "${AWS_REGION}" ]; then
    echo "export AWS_REGION=us-west-1" >> ~/.bashrc
    echo "export AWS_REGION=us-west-1" >> ~/log
fi
if [ -z "${AWS_ACCESS_KEY_ID }" ]; then
    echo "export AWS_ACCESS_KEY_ID=${{ secrets.AWS_ACCESS_KEY_ID }}" >> ~/.bashrc
    echo "export AWS_ACCESS_KEY_ID=${{ secrets.AWS_ACCESS_KEY_ID }}" >> ~/log
fi
if [ -z "${AWS_SECRET_ACCESS_KEY}" ]; then
    echo "export AWS_SECRET_ACCESS_KEY=${{ secrets.AWS_SECRET_ACCESS_KEY }}" >> ~/.bashrc
    echo "export AWS_SECRET_ACCESS_KEY=${{ secrets.AWS_SECRET_ACCESS_KEY }}" >> ~/log
fi
if [ -z "${SAGEMAKER_ENDPOINT}" ]; then
    echo "export SAGEMAKER_ENDPOINT=test" >> ~/.bashrc
    echo "export SAGEMAKER_ENDPOINT=test" >> ~/log
fi

# Load environment variables
source ~/.bashrc

cd /home/ubuntu/app

# Verify docker-compose.yml location
if [! -f docker-compose.yml ]; then 
    echo "Could not find `docker-compose.yml` file in /home/ubuntu/app."
    exit 1
fi

# Start docker compose services
docker compose up -d 2> ~/docker.log

# Check if docker compose command ran successfully
if [$? -ne 0 ]; then
    echo "Failed to start Docker Compose services"
    exit 1
fi

# Give some time before verifying service status
sleep 10

