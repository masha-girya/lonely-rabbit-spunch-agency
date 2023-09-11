from wagtail import blocks
from wagtail.api import APIField
from wagtail.fields import StreamField
from wagtail.images.blocks import ImageChooserBlock
from wagtail.models import Page
from django.db import models
from wagtail.admin.panels import FieldPanel
from .serializers import NewsBodySerializer


class NewsSinglePage(Page):
    date = models.DateField("Post date")
    caption = models.CharField(max_length=400, default='')
    main_image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name="+",
    )
    thumbnail_image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name="+",
    )
    body = StreamField([
        ('h1', blocks.CharBlock(null=True, blank=True)),
        ('h2', blocks.CharBlock(null=True, blank=True)),
        ('paragraph', blocks.CharBlock(null=True, blank=True)),
        ('image', ImageChooserBlock()),
    ], use_json_field=True)

    content_panels = Page.content_panels + [
        FieldPanel('date'),
        FieldPanel('caption'),
        FieldPanel('body'),
        FieldPanel('thumbnail_image'),
        FieldPanel('main_image')
    ]

    api_fields = [
        APIField('thumbnail_image'),
        APIField('main_image'),
        APIField('caption'),
        APIField('body', serializer=NewsBodySerializer()),
        APIField('date'),
    ]

    parent_page_types = ['news.NewsPage']


class NewsPage(Page):
    banner_title = models.CharField(max_length=100, default='')

    content_panels = Page.content_panels + [
        FieldPanel('banner_title'),
    ]

    api_fields = [
        APIField('banner_title'),
    ]
