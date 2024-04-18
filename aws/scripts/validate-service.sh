#!/bin/bash
# validate-service.sh: Check for status health of docker services after after-instal.sh

# Check if all services are running
docker-compose ps --filter "status=running" | while read -r service_name; do
    if ! docker-compose ps | grep -q "$service_name.*Up"; then
        echo "Service $service_name is not running."
        exit 1
    fi
done

echo "All services are running successfully."
exit 0
