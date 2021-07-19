from django.db import models

from user_control.models import User


class RequestModel(models.Model):
    BLOOD_GROUP_CHOICES = [
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('B+', 'B+'),
        ('B-', 'B-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
        ('O+', 'O+'),
        ('O-', 'O-'),
    ]
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]

    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    patient_name = models.CharField(max_length=100)
    gender = models.CharField(max_length=255, choices=GENDER_CHOICES)
    blood_group = models.CharField(max_length=255, choices=BLOOD_GROUP_CHOICES)
    location = models.TextField(max_length=255)
    is_emergency = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    needed_within = models.DateField()
    phone = models.CharField(max_length=20)
    note = models.TextField(blank=True, null=True)
    posted_on = models.DateField(auto_now_add=True)

    def __str__(self):
        return str(self.blood_group)
