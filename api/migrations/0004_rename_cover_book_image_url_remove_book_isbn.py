# Generated by Django 4.2.1 on 2023-05-24 22:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_rename_books_book"),
    ]

    operations = [
        migrations.RenameField(
            model_name="book",
            old_name="cover",
            new_name="image_url",
        ),
        migrations.RemoveField(
            model_name="book",
            name="isbn",
        ),
    ]
