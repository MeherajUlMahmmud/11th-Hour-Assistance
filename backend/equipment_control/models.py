from django.db import models

from user_control.models import User


class EquipmentRequestModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    is_emergency = models.BooleanField(default=False)
    location = models.TextField(max_length=255)
    needed_within = models.DateField()
    is_active = models.BooleanField(default=True)
    phone = models.CharField(max_length=20)
    note = models.TextField(blank=True, null=True)
    posted_on = models.DateField(auto_now_add=True)


class EquipmentPostModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(null=True, blank=True)
    description = models.TextField()
    location = models.TextField(max_length=255)
    posted_on = models.DateTimeField(auto_now_add=True)
