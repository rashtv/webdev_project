from rest_framework import serializers

from api.models import Beer, Champagne, Wine, Vodka, Comment


class BeerModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beer
        fields = ('id', 'name',  'price', 'image_path', 'description')


class ChampagneModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Champagne
        fields = ('id', 'name',  'price', 'image_path', 'description')


class WineModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wine
        fields = ('id', 'name',  'price', 'image_path', 'description')


class VodkaModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vodka
        fields = ('id', 'name',  'price', 'image_path', 'description')


class CommentModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'title',  'text')


# class BeerSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     name = serializers.CharField()
#     price = serializers.IntegerField()
#     image_path = serializers.CharField()
#     description = serializers.CharField()
#
#     def create(self, validated_data):
#         beer = Beer.objects.create(name=validated_data.get('name'),
#                                    price=validated_data.get('salary'),
#                                    image_path=validated_data.get('image_path'),
#                                    description=validated_data.get('description'))
#         return beer
#
#     def update(self, instance, validated_data):
#         instance.name = validated_data.get('name')
#         instance.price = validated_data.get('price')
#         instance.image_path = validated_data.get('image_path')
#         instance.description = validated_data.get('description')
#         instance.save()
#         return instance


# class WineSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     name = serializers.CharField()
#     price = serializers.IntegerField()
#     image_path = serializers.CharField()
#     description = serializers.CharField()
#
#     def create(self, validated_data):
#         wine = Wine.objects.create(name=validated_data.get('name'),
#                                    price=validated_data.get('salary'),
#                                    image_path=validated_data.get('image_path'),
#                                    description=validated_data.get('description'))
#         return wine
#
#     def update(self, instance, validated_data):
#         instance.name = validated_data.get('name')
#         instance.price = validated_data.get('price')
#         instance.image_path = validated_data.get('image_path')
#         instance.description = validated_data.get('description')
#         instance.save()
#         return instance
