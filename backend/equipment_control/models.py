from django.db import models

from user_control.models import User


class EquipmentRequestModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(null=True, blank=True)
    description = models.TextField()
    is_emergency = models.BooleanField(default=False)
    location = models.TextField(max_length=255)
    posted_on = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)


class EquipmentPostModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(null=True, blank=True)
    description = models.TextField()
    location = models.TextField(max_length=255)
    posted_on = models.DateTimeField(auto_now_add=True)
