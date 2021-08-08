from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from equipment_control.models import EquipmentRequestModel
from equipment_control.serializers import EquipmentRequestModelSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createEquipmentRequest(request):
    pass


@api_view(['GET'])
def getEquipmentRequests(request):
    pass


@api_view(['GET'])
def getEquipmentRequestById(request, pk):
    pass


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateEquipmentRequest(request, pk):
    pass


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteEquipmentRequest(request, pk):
    pass
