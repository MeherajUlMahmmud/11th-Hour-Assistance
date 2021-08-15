from django.urls import path
from ambulance_service.views import *

urlpatterns = [
    path('all-ambulance/', get_ambulance),
    path('ambulance/<str:pk>/', get_ambulance_detail),
]
