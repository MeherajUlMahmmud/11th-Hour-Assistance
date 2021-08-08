from rest_framework import serializers

from equipment_control.models import EquipmentRequestModel


class EquipmentRequestModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = EquipmentRequestModel
        fields = '__all__'
