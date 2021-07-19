from django.urls import path

from request_control.views import *

urlpatterns = [
    path('create-new-request/', createRequest),
    path('all-requests/', getAllRequests),
    path('request/<str:pk>/', getSingleRequest),
    path('edit-request/<str:pk>/', editRequest),
    path('delete-request/<str:pk>/', deleteRequest),
]
