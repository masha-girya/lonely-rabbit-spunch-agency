from wagtail.models import Page
from wagtail.fields import StreamField
from wagtail import blocks
from wagtail.images.blocks import ImageChooserBlock
from django.db import models
from wagtail.api import APIField
from wagtail.admin.panels import FieldPanel
from .serializers import RecruitmentBodySerializer


class RecruitmentSinglePage(Page):
    date = models.DateField("Post date")
    caption = models.CharField(max_length=400, default='')
    body = StreamField([
        ('h1', blocks.CharBlock(null=True, blank=True)),
        ('h2', blocks.CharBlock(null=True, blank=True)),
        ('paragraph', blocks.CharBlock(null=True, blank=True)),
        ('image', ImageChooserBlock()),
    ], use_json_field=True)

    content_panels = Page.content_panels + [
        FieldPanel('date'),
        FieldPanel('caption'),
        FieldPanel('body')
    ]

    api_fields = [
        APIField('caption'),
        APIField('body', serializer=RecruitmentBodySerializer()),
        APIField('date'),
    ]

    parent_page_types = ['recruitment.RecruitmentPage']


class RecruitmentPage(Page):
    banner_title = models.CharField(max_length=100, default='')
    banner_description = models.CharField(max_length=200, default='')

    content_panels = Page.content_panels + [
        FieldPanel('banner_title'),
        FieldPanel('banner_description'),
    ]

    api_fields = [
        APIField('banner_title'),
        APIField('banner_description'),
    ]
