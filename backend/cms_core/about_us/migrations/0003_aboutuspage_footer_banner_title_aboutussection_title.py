# Generated by Django 4.2.4 on 2023-09-14 13:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('about_us', '0002_aboutussection_image_position'),
    ]

    operations = [
        migrations.AddField(
            model_name='aboutuspage',
            name='footer_banner_title',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='aboutussection',
            name='title',
            field=models.CharField(default='', max_length=1000),
        ),
    ]
