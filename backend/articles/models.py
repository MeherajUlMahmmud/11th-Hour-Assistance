from django.db import models
from user_control.models import User


class ArticleModel(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=True, blank=True)
    image = models.ImageField(null=True, blank=True, default='placeholder.png')
    content = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
