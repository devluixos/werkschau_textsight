#!/bin/bash

# Create a Docker network if not already created
docker network create qr-network

# Remove unused Docker objects to free up space
docker system prune -f
docker volume prune -f

# Build and run the backend container
cd ~/werkschau-project/qr-backend
docker build -t qr-backend .
docker rm -f qr-backend
docker run -d --name qr-backend --network qr-network -p 3001:3001 qr-backend

# Build and run the frontend container
cd ~/werkschau-project/primevue-app
docker build -t primevue-app .
docker rm -f primevue-app
docker run -d --name primevue-app --network qr-network -p 3000:80 primevue-app
