from django.urls import path
from .views import *

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('register/', registerUser, name='register'),

    path('profile/', getUserProfile, name="users-profile"),

    path('account-update/', updateUserAccount, name="user-account-update"),
    path('profile-update/', updateUserProfile, name="user-profile-update"),
]
