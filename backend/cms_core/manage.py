#!/usr/bin/env python
import os
import sys
import environ

env = environ.Env()
environ.Env.read_env()

if __name__ == "__main__":
    if env("MODE") == 'dev':
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "cms_core.settings.dev")
    if env("MODE") == 'prod':
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "cms_core.settings.production")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
