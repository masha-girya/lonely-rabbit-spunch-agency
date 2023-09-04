from wagtail.models import Page
from wagtail.fields import StreamField
from wagtail.api import APIField
from wagtail.admin.panels import FieldPanel
from wagtail import blocks


class LicensigPage(Page):
    body = StreamField([
        ('h1', blocks.CharBlock(null=True, blank=True)),
        ('h2', blocks.CharBlock(null=True, blank=True)),
        ('paragraph', blocks.CharBlock(null=True, blank=True)),
    ], use_json_field=True)

    content_panels = Page.content_panels + [
        FieldPanel('body'),
    ]

    api_fields = [
        APIField('body'),
    ]
