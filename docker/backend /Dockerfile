FROM python:3.9
ENV PYTHONUNBUFFERED=1

WORKDIR /app
COPY ./backend/cms_core/requirements.txt /app
RUN pip3 install -r requirements.txt

COPY ./backend/cms_core /app
COPY ./.env /app/cms_core/.env
