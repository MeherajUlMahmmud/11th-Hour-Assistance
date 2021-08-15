from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ambulance_service.models import AmbulanceModel
from ambulance_service.serializers import AmbulanceSerializer


@api_view(['GET'])
def get_ambulance(request):
    requests = AmbulanceModel.objects.all()
    serializer = AmbulanceSerializer(requests, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_ambulance_detail(request, pk):
    req = AmbulanceModel.objects.get(id=pk)
    serializer = AmbulanceSerializer(req, many=False)
    return Response(serializer.data)
