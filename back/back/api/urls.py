from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token
from api.views import BeerListAPIView, BeerDetailAPIView
from api.views import ChampagneListAPIView, ChampagneDetailAPIView
from api.views import WineListAPIView, WineDetailAPIView
from api.views import VodkaListAPIView, VodkaDetailAPIView
from api.views import CommentListAPIView, CommentDetailAPIView

# from api.views import beer_list, beer_detail


urlpatterns = [
    path('login/', obtain_jwt_token),
    path('beer/', BeerListAPIView.as_view()),
    path('beer/<int:pk>/', BeerDetailAPIView.as_view()),
    path('champagne/', ChampagneListAPIView.as_view()),
    path('champagne/<int:pk>/', ChampagneDetailAPIView.as_view()),
    path('wine/', WineListAPIView.as_view()),
    path('wine/<int:pk>/', WineDetailAPIView.as_view()),
    path('vodka/', VodkaListAPIView.as_view()),
    path('vodka/<int:pk>/', VodkaDetailAPIView.as_view()),
    path('comment/', CommentListAPIView.as_view()),
    path('comment/<int:pk>/', CommentDetailAPIView.as_view()),

    # path('beer/', beer_list),
    # path('beer/<int:beer_id>/', beer_detail),
]