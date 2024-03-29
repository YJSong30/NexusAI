# Dockerfile for frontend React app

FROM node:14-alpine as build

# Set working directory in container
WORKDIR /app

# copy package.json package-lock.json
COPY frontend/package*.json ./
# COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy rest of app to container
COPY frontend/ .
# COPY ./ .

EXPOSE 3000

# TODO: setup nginx?

# Start server
CMD ["npm", "run", "start"]

