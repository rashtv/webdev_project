from rest_framework import generics
# from rest_framework.permissions import IsAuthenticated


from api.models import Beer, Champagne, Wine, Vodka, Comment
from api.serializers import BeerModelSerializer, ChampagneModelSerializer, \
                            WineModelSerializer, VodkaModelSerializer, \
                            CommentModelSerializer


class BeerListAPIView(generics.ListCreateAPIView):
    queryset = Beer.objects.all()
    serializer_class = BeerModelSerializer
    # permission_classes = (IsAuthenticated,)


class BeerDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Beer.objects.all()
    serializer_class = BeerModelSerializer
    # permission_classes = (IsAuthenticated,)


class ChampagneListAPIView(generics.ListCreateAPIView):
    queryset = Champagne.objects.all()
    serializer_class = ChampagneModelSerializer
    # permission_classes = (IsAuthenticated,)


class ChampagneDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Champagne.objects.all()
    serializer_class = ChampagneModelSerializer
    # permission_classes = (IsAuthenticated,)


class WineListAPIView(generics.ListCreateAPIView):
    queryset = Wine.objects.all()
    serializer_class = WineModelSerializer
    # permission_classes = (IsAuthenticated,)


class WineDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Wine.objects.all()
    serializer_class = WineModelSerializer
    # permission_classes = (IsAuthenticated,)


class VodkaListAPIView(generics.ListCreateAPIView):
    queryset = Vodka.objects.all()
    serializer_class = VodkaModelSerializer
    # permission_classes = (IsAuthenticated,)


class VodkaDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vodka.objects.all()
    serializer_class = VodkaModelSerializer
    # permission_classes = (IsAuthenticated,)


class CommentListAPIView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentModelSerializer
    # permission_classes = (IsAuthenticated,)


class CommentDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentModelSerializer
    # permission_classes = (IsAuthenticated,)


# @api_view(['GET', 'POST'])
# def beer_list(request):
#     if request.method == 'GET':
#         beer = Beer.objects.all()
#         serializer = BeerModelSerializer(beer, many=True)
#         return Response(serializer.data)
#
#     elif request.method == 'POST':
#         serializer = BeerModelSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors)
#
#
# @api_view
# def beer_detail(request, beer_id):
#     try:
#         beer = Beer.objects.get(id=beer_id)
#     except Beer.DoesNotExist as e:
#         return Response({'message': str(e)}, status=400)
#     if request.method == 'GET':
#         serializer = BeerModelSerializer(beer)
#         return Response(serializer.data)
#     elif request.method == 'PUT':
#         serializer = BeerModelSerializer(instance=beer, data=request.data)
#         if serializer.is_valid():
#             beer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors)
#     elif request.method == 'DELETE':
#         beer.delete()
#         return Response({'message': 'deleted'}, status=204)
