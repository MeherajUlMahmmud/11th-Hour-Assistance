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

    # article = ArticleModel.objects.create(
    #     author=request.user,
    #     title="Title",
    # )

    article = ArticleModel.objects.create(
        author=request.user,
        title=data['title'],
        image=data['image'],
        content=data['content'],
    )
    serializer = ArticleModelSerializer(article, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def get_articles(request):
    articles = ArticleModel.objects.all().order_by('-created_at')
    serializer = ArticleModelSerializer(articles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_article_by_id(request, pk):
    article = ArticleModel.objects.get(id=pk)
    serializer = ArticleModelSerializer(article, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_article(request, pk):
    data = request.data
    article = ArticleModel.objects.get(id=data['articleId'])

    article.title = data['title']
    article.image = data['image']
    article.content = data['content']
    article.save()

    serializer = ArticleModelSerializer(article, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def uploadImage(request):
    data = request.data

    articleId = data['articleId']
    article = ArticleModel.objects.get(id=articleId)

    article.image = request.FILES.get('image')
    article.save()
    print(article.image)

    return Response('Image was uploaded')


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_article(request, pk):
    article = ArticleModel.objects.get(id=pk)
    article.delete()
    return Response('Article Deleted')
