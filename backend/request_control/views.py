from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from request_control.models import RequestModel
from request_control.serializers import RequestModelSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createRequest(request):
    data = request.data
    print(data)

    req = RequestModel.objects.create(
        user=request.user,
        patient_name=data['patient_name'],
        gender=data['gender'],
        blood_group=data['blood_group'],
        location=data['location'],
        needed_within=data['needed_within'],
        phone=data['phone'],
        note=data['note']
    )
    serializer = RequestModelSerializer(req, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getAllRequests(request):
    requests = RequestModel.objects.all()
    serializer = RequestModelSerializer(requests, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getSingleRequest(request, pk):
    req = RequestModel.objects.get(id=pk)
    serializer = RequestModelSerializer(req, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def editRequest(request, pk):
    data = request.data
    req = RequestModel.objects.get(id=pk)

    req.patient_name = data['patient_name']
    req.gender = data['gender']
    req.blood_group = data['blood_group']
    req.location = data['location']
    req.needed_within = data['needed_within']
    req.phone = data['phone']
    req.note = data['note']

    req.save()

    serializer = RequestModelSerializer(req, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteRequest(request, pk):
    req = RequestModel.objects.get(id=pk)
    req.delete()
    return Response('Request Deleted')
