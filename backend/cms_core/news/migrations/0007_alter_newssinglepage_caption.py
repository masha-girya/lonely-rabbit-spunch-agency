# Generated by Django 4.2.4 on 2023-09-11 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0006_newssinglepage_caption'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newssinglepage',
            name='caption',
            field=models.CharField(default='', max_length=400),
        ),
    ]
