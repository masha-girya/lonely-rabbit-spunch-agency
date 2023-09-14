from modelcluster.fields import ParentalKey
from wagtail.models import Page, Orderable
from wagtail.api import APIField
from wagtail.admin.panels import FieldPanel, InlinePanel
from django.db import models


class AboutUsSection(Orderable):
    IMAGE_POSITION_OPTIONS = (
        ("LEFT", 'Left'),
        ("RIGHT", 'Right'),
    )
    page = ParentalKey("about_us.AboutUsPage", related_name="sections")
    image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name="+",
    )
    title = models.CharField(max_length=1000, default='')
    text = models.CharField(max_length=1000, default='')
    image_position = models.CharField(choices=IMAGE_POSITION_OPTIONS, default="LEFT")

    panels = [
        FieldPanel("image"),
        FieldPanel("text"),
        FieldPanel('title'),
        FieldPanel('image_position'),
    ]

    api_fields = [
        APIField('image'),
        APIField('text'),
        APIField('title'),
        APIField('image_position'),
    ]


class AboutUsPage(Page):
    banner_title = models.CharField(max_length=100, default='')
    footer_banner_title = models.CharField(max_length=100, default='')
    banner_description = models.CharField(max_length=200, default='')

    content_panels = Page.content_panels + [
        FieldPanel('banner_title'),
        FieldPanel('banner_description'),
        FieldPanel('footer_banner_title'),
        InlinePanel('sections', label='About Us Body'),
    ]

    api_fields = [
        APIField('banner_title'),
        APIField('banner_description'),
        APIField('footer_banner_title'),
        APIField('sections'),
    ]
