from django.db import models


# Create your models here.


class AmbulanceModel(models.Model):
    name = models.CharField(max_length=20)
    type = models.CharField(max_length=20)
    garage_location = models.CharField(max_length=20)
    image = models.ImageField(null=True, blank=True)
    is_available = models.BooleanField(default=True)
    car_number = models.CharField(max_length=20)
    driver_name = models.TextField()
    phone1 = models.CharField(max_length=15)
    phone2 = models.CharField(max_length=15, null=True, blank=True)
    service_branch = models.CharField(max_length=20)
