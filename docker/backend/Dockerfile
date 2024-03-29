# Dockerfile for FastAPI backend API
FROM python:3.10-slim as build

WORKDIR /app

# Copy requirements.txt
COPY backend/requirements.txt ./
# COPY requirements.txt ./

# install pip dependencies
RUN pip install -r requirements.txt

# Copy rest of backend app
COPY backend/. .
# COPY . .

EXPOSE 8080

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
