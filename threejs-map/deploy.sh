#!/bin/bash

set -e

# Remove unused Docker objects to free up space
docker system prune -f
docker volume prune -f

# Navigate to the Vue.js project directory and build the project
cd ~/werkschau-project/threejs-map
npm run build

# Create the Dockerfile in the Vue.js project directory
cat <<EOF > Dockerfile
FROM nginx:alpine

# Copy the built files from the Vue.js project
COPY dist/ /usr/share/nginx/html

# Copy the custom NGINX configuration file
COPY vue-app.conf /etc/nginx/conf.d/default.conf
EOF

# Create the NGINX configuration file
cat <<EOF > vue-app.conf
server {
    listen 80;
    server_name localhost;

    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files \$uri \$uri/ /index.html;
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}
EOF

# Build the Docker image
docker build -t vue-nginx-app .

# Remove any existing container with the same name, if it exists
docker rm -f vue-nginx-app || true

# Run the new container, mapping port 3002 on the host to port 80 in the container
docker run -d --name vue-nginx-app -p 3002:80 vue-nginx-app
