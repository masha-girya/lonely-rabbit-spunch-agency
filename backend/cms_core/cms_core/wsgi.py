"""
WSGI config for cms_core project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""
import environ
import os

env = environ.Env()
environ.Env.read_env()

from django.core.wsgi import get_wsgi_application

if env("MODE") == 'dev':
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "cms_core.settings.dev")
if env("MODE") == 'prod':
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "cms_core.settings.production")

application = get_wsgi_application()
