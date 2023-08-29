from django.db import models
from wagtail.admin.panels import FieldPanel
from wagtail.models import Page
from wagtail.api import APIField


class HomePage(Page):
    first_block_title = models.CharField(max_length=27, default='')

    content_panels = Page.content_panels + [
        FieldPanel('first_block_title'),
    ]

    api_fields = [
        APIField('first_block_title'),
    ]
