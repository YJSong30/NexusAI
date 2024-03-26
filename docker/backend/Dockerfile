# Dockerfile for FastAPI backend API
FROM python:3.10-slim as build

WORKDIR /app

# Copy requirements.txt
COPY ./backend/requirements.txt ./

# install pip dependencies
RUN pip install -r --no-cache-dir requirements.txt

# Copy rest of backend app
COPY . .

EXPOSE 8081

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8081"]
