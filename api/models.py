from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    year = models.PositiveIntegerField()
    image_url = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

