from django.urls import path

from articles.views import *

urlpatterns = [
    path('create-new-article/', create_article),
    path('all-articles/', get_articles),
    path('upload/', upload_image),
    path('article/<str:pk>/', get_article_by_id),
    path('update-article/<str:pk>/', update_article),
    path('delete-article/<str:pk>/', delete_article),
]