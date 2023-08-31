# Base image:
FROM nginx

# Install dependencies
RUN apt-get update -qq && apt-get -y install apache2-utils

WORKDIR /usr/share/nginx/html

# create log directory
RUN mkdir log

# Copy Nginx config template
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Use the "exec" form of CMD so Nginx shuts down gracefully on SIGTERM (i.e. `docker stop`)
CMD [ "nginx", "-g", "daemon off;" ]