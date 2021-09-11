from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from articles.models import ArticleModel
from articles.serializers import ArticleModelSerializer


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_article(request):
    data = request.data
    print(data)

    post = ArticleModel.objects.create(
        author=request.user,
        title="Title",
    )
    serializer = ArticleModelSerializer(post, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def get_articles(request):
    posts = ArticleModel.objects.all().order_by('-created_at')
    serializer = ArticleModelSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_article_by_id(request, pk):
    post = ArticleModel.objects.get(id=pk)
    serializer = ArticleModelSerializer(post, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_article(request, pk):
    data = request.data
    post = ArticleModel.objects.get(id=pk)

    post.title = data['title']
    post.image = data['image']
    post.content = data['content']
    post.save()

    serializer = ArticleModelSerializer(post, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_article(request, pk):
    post = ArticleModel.objects.get(id=pk)
    post.delete()
    return Response('Article Deleted')
