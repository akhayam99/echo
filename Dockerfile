# Use an official Python runtime as a parent image
FROM python:3.10

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /app

# Install dependencies
COPY guardian/requirements.txt /app/guardian
RUN pip install -r guardian/requirements.txt

RUN npm install surface

# Copy the project code into the container
COPY . /app/
