from rest_framework import serializers
from ambulance_service.models import AmbulanceModel


class AmbulanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = AmbulanceModel
        fields = '__all__'
