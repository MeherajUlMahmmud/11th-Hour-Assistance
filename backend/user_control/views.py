from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password

from .models import User
from .serializers import *


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        user_serializer = UserSerializerWithToken(self.user).data

        for k, v in user_serializer.items():
            data[k] = v

        return data
        # profile = UserProfileModel.objects.get(user=self.user)
        # profile_serializer = UserProfileSerializer(profile, many=False)
        #
        # return data, profile_serializer.data
        # return Response({'userInfo': data, 'profileInfo': profile_serializer.data})


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def registerUser(request):
    data = request.data

    print(data)
    if len(data['email']) == 0 or len(data['name']) == 0 or len(data['password']) == 0:
        return Response({'detail': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST)
        
    try:
        user = User.objects.create(
            email=data['email'],
            name=data['name'],
            password=make_password(data['password'])
        )
        profile = UserProfileModel.objects.create(
            user=user
        )
        user_serializer = UserSerializerWithToken(user, many=False)
        profile_serializer = UserProfileSerializer(profile, many=False)
        return Response(user_serializer.data)
    except:
        message = {'detail': "Email already exists"}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserAccount(request):
    pass


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    pass


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    profile = UserProfileModel.objects.get(user=user)
    print(profile)
    user_serializer = UserSerializer(user, many=False)
    profile_serializer = UserProfileSerializer(profile, many=False)
    return Response(profile_serializer.data)

