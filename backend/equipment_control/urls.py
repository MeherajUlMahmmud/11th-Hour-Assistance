from django.urls import path

from equipment_control.views import *

urlpatterns = [
    path('create-new-request/', createEquipmentRequest),
    path('all-requests/', getEquipmentRequests),
    path('request/<str:pk>/', getEquipmentRequestById),
    path('edit-request/<str:pk>/', updateEquipmentRequest),
    path('delete-request/<str:pk>/', deleteEquipmentRequest),
    path('create-new-post/', createPost),
    path('all-post/', getAllPosts),
    path('post/<str:pk>/', getSinglePost),
    path('edit-post/<str:pk>/', editPost),
    path('delete-post/<str:pk>/', deletePost),

]
