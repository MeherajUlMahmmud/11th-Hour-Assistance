from django.urls import path

from equipment_control.views import *

urlpatterns = [
    path('create-new-request/', create_equipment_request),
    path('all-requests/', get_equipment_requests),
    path('request/<str:pk>/', get_equipment_request_by_id),
    path('edit-request/<str:pk>/', update_equipment_request),
    path('delete-request/<str:pk>/', delete_equipment_request),
    path('create-new-post/', create_post),
    path('all-post/', get_all_posts),
    path('post/<str:pk>/', get_single_post),
    path('edit-post/<str:pk>/', edit_post),
    path('delete-post/<str:pk>/', delete_post),
]
