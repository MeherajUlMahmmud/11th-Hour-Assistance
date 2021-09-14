from rest_framework import serializers

from articles.models import ArticleModel


class ArticleModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleModel
        fields = '__all__'
