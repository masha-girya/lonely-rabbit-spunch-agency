#!/usr/bin/env python
import sys
import os

if __name__ == "__main__":
    from django.core.management import execute_from_command_line

    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cms_core.settings.base')
    execute_from_command_line(sys.argv)
