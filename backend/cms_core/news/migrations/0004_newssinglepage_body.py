# Generated by Django 4.2.4 on 2023-08-31 14:56

from django.db import migrations
import wagtail.blocks
import wagtail.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0003_remove_newssinglepage_body'),
    ]

    operations = [
        migrations.AddField(
            model_name='newssinglepage',
            name='body',
            field=wagtail.fields.StreamField([('h1', wagtail.blocks.CharBlock(blank=True, null=True)), ('h2', wagtail.blocks.CharBlock(blank=True, null=True)), ('paragraph', wagtail.blocks.RichTextBlock()), ('image', wagtail.images.blocks.ImageChooserBlock())], default=None, use_json_field=True),
            preserve_default=False,
        ),
    ]
