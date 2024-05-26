FROM nginx:alpine

# Copy the built files from the Vue.js project
COPY dist/ /usr/share/nginx/html

# Copy the custom NGINX configuration file
COPY vue-app.conf /etc/nginx/conf.d/default.conf
