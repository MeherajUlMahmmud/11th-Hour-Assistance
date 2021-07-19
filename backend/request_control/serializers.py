from rest_framework import serializers

from request_control.models import RequestModel


class RequestModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestModel
        fields = '__all__'
