from django.urls import path

from equipment_control.views import *

urlpatterns = [
    path('post-equipment-request/', createEquipmentRequest),
    path('equipment-requests/', getEquipmentRequests),
    path('equipment-request/<str:id>', getEquipmentRequestById),
    path('update-equipment-request/<str:id>', updateEquipmentRequest),
    path('delete-equipment-request/<str:id>', deleteEquipmentRequest)
]
