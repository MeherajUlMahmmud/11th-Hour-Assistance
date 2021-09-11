from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('user_control.urls')),
    path('api/request/', include('request_control.urls')),
    path('api/equipment/', include('equipment_control.urls')),
    path('api/articles/', include('articles.urls')),
]
