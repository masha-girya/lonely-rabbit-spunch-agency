from django.db import models
from modelcluster.fields import ParentalKey
from wagtail.admin.panels import FieldPanel, InlinePanel
from wagtail.models import Page, Orderable
from wagtail.api import APIField


class HomePageCharactersCarousel(Orderable):
    page = ParentalKey("home.HomePage", related_name="characters_carousel")
    carousel_image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name="+",
    )
    name = models.CharField(max_length=100, default='')
    description = models.CharField(max_length=1000, default='')

    panels = [
        FieldPanel("carousel_image"),
        FieldPanel("name"),
        FieldPanel("description")
    ]

    api_fields = [
        APIField('description'),
        APIField('carousel_image'),
        APIField('name')
    ]


class HomePage(Page):
    first_block_title = models.CharField(max_length=100, default='')
    second_block_title = models.CharField(max_length=1000, default='')
    video_block_title = models.CharField(max_length=100, default='')
    video_block_description = models.CharField(max_length=1000, default='')

    content_panels = Page.content_panels + [
        FieldPanel('first_block_title'),
        FieldPanel('second_block_title'),
        FieldPanel('video_block_title'),
        FieldPanel('video_block_description'),
        InlinePanel('characters_carousel', label='Characters Carousel')
    ]

    api_fields = [
        APIField('first_block_title'),
        APIField('second_block_title'),
        APIField('video_block_title'),
        APIField('video_block_description'),
        APIField('characters_carousel'),
    ]
