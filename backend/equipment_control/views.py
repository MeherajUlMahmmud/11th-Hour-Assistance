from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from equipment_control.models import EquipmentRequestModel, EquipmentPostModel
from equipment_control.serializers import EquipmentRequestModelSerializer, EquipmentPostModelSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_equipment_request(request):
    data = request.data

    if data['is_emergency'] == 'false':
        is_emergency = False
    elif data['is_emergency'] == 'on':
        is_emergency = True
    else:
        is_emergency = data['is_emergency']

    req = EquipmentRequestModel.objects.create(
        user=request.user,
        title=data['title'],
        description=data['description'],
        is_emergency=is_emergency,
        location=data['location'],
        needed_within=data['needed_within'],
        is_active=True,
        phone=data['phone'],
        note=data['note']
    )
    serializer = EquipmentRequestModelSerializer(req, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def get_equipment_requests(request):
    requests = EquipmentRequestModel.objects.all()
    serializer = EquipmentRequestModelSerializer(requests, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_equipment_request_by_id(request, pk):
    req = EquipmentRequestModel.objects.get(id=pk)
    serializer = EquipmentRequestModelSerializer(req, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_equipment_request(request, pk):
    data = request.data
    req = EquipmentRequestModel.objects.get(id=pk)

    req.title = data['title']
    req.description = data['description']
    req.is_emergency = data['is_emergency']
    req.location = data['location']
    req.needed_within = data['needed_within']
    req.phone = data['phone']
    req.note = data['note']

    req.save()

    serializer = EquipmentRequestModelSerializer(req, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_equipment_request(request, pk):
    req = EquipmentRequestModel.objects.get(id=pk)
    req.delete()
    return Response('Request Deleted')


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_post(request):
    data = request.data

    new_post = EquipmentPostModel.objects.create(
        user=request.user,
        image=data['image'],
        description=data['description'],
        location=data['location'],
        posted_on=data['posted_on']
    )
    serializer = EquipmentPostModelSerializer(new_post, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def edit_post(request, pk):
    data = request.data
    db_post = EquipmentPostModel.objects.get(id=pk)

    db_post.user = data['user'],
    db_post.image = data['image'],
    db_post.description = data['description'],
    db_post.location = data['location'],
    db_post.posted_on = data['posted_on']

    db_post.save()

    serializer = EquipmentPostModelSerializer(db_post, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def get_all_posts(request):
    posts = EquipmentPostModel.objects.all()
    serializer = EquipmentPostModelSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_single_post(request, pk):
    single_post = EquipmentPostModel.objects.get(id=pk)
    serializer = EquipmentPostModelSerializer(single_post, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_post(request, pk):
    del_post = EquipmentPostModel.objects.get(id=pk)
    del_post.delete()
    return Response('Request Deleted')
