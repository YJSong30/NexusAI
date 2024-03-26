# Dockerfile for frontend React app

FROM node:14-alpine as build

# Set working directory in container
WORKDIR /app

# copy package.json package-lock.json
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy rest of app to container
COPY . .

# Build app
RUN npm run build

EXPOSE 8080

# TODO: setup nginx?

# Start server
CMD ["npm", "run", "start"]

