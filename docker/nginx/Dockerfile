# Base image:
FROM nginx

# Install dependencies
RUN apt-get update -qq && apt-get -y install apache2-utils

WORKDIR /usr/share/nginx/html

ENV FRONT_END_DOMAIN=lonely-rabbit.spunch.agency
ENV BACK_END_DOMAIN=api-lonely-rabbit.spunch.agency

# create log directory
RUN mkdir log

# Copy Nginx config template
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN sed -i 's/80/$BACK_END_DOMAIN/' /etc/nginx/conf.d/default.conf
RUN sed -i 's/80/$FRONT_END_DOMAIN/' /etc/nginx/conf.d/default.conf

# Use the "exec" form of CMD so Nginx shuts down gracefully on SIGTERM (i.e. `docker stop`)
CMD [ "nginx", "-g", "daemon off;" ]