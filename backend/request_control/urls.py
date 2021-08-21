from django.urls import path

from request_control.views import *

urlpatterns = [
    path('create-new-request/', createRequest, name='create-request'),
    path('all-requests/', getAllRequests, name="get-all-requests"),
    path('request/<str:pk>/', getSingleRequest, name="request-details"),
    path('update-request/<str:pk>/', updateRequest, name="update-request"),
    path('delete-request/<str:pk>/', deleteRequest, name="delete-request"),
]
