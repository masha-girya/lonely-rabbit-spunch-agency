# Base image:
FROM nginx

# Install dependencies
RUN apt-get update -qq && apt-get -y install apache2-utils

WORKDIR /usr/share/nginx/html

ARG FRONT_END_DOMAIN
ARG BACK_END_DOMAIN

# create log directory
RUN mkdir log

# Copy Nginx config template
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN sed -i "s/\$FRONT_END_DOMAIN/$FRONT_END_DOMAIN/g" /etc/nginx/conf.d/default.conf
RUN sed -i "s/\$BACK_END_DOMAIN/$BACK_END_DOMAIN/g" /etc/nginx/conf.d/default.conf

# Use the "exec" form of CMD so Nginx shuts down gracefully on SIGTERM (i.e. `docker stop`)
CMD [ "nginx", "-g", "daemon off;" ]