# Generated by Django 4.2.1 on 2023-05-24 22:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="books",
            name="cover",
            field=models.ImageField(default=None, upload_to=""),
        ),
    ]
