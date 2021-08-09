from rest_framework import serializers

from equipment_control.models import EquipmentRequestModel, EquipmentPostModel


class EquipmentRequestModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = EquipmentRequestModel
        fields = '__all__'


class EquipmentPostModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = EquipmentPostModel
        fields = '__all__'
