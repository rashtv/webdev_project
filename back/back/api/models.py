from django.db import models


class Beer(models.Model):
    name = models.CharField(max_length=255, default='', null=True)
    price = models.CharField(max_length=255, default='0', null=True)
    image_path = models.CharField(max_length=255, default='', null=True)
    description = models.CharField(max_length=255, default='', null=True)

    class Meta:
        verbose_name = 'Beer',
        verbose_name_plural = 'Beer'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'image_path': self.image_path,
            'description': self.description
        }


class Wine(models.Model):
    name = models.CharField(max_length=255, default='', null=True)
    price = models.CharField(max_length=255, default='0', null=True)
    image_path = models.CharField(max_length=255, default='', null=True)
    description = models.CharField(max_length=255, default='', null=True)

    class Meta:
        verbose_name = 'Wine',
        verbose_name_plural = 'Wine'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'image_path': self.image_path,
            'description': self.description
        }


class Champagne(models.Model):
    name = models.CharField(max_length=255, default='', null=True)
    price = models.CharField(max_length=255, default='0', null=True)
    image_path = models.CharField(max_length=255, default='', null=True)
    description = models.CharField(max_length=255, default='', null=True)

    class Meta:
        verbose_name = 'Champagne',
        verbose_name_plural = 'Champagne'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'image_path': self.image_path,
            'description': self.description
        }


class Vodka(models.Model):
    name = models.CharField(max_length=255, default='', null=True)
    price = models.CharField(max_length=255, default='0', null=True)
    image_path = models.CharField(max_length=255, default='', null=True)
    description = models.CharField(max_length=255, default='', null=True)

    class Meta:
        verbose_name = 'Vodka',
        verbose_name_plural = 'Vodka'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'image_path': self.image_path,
            'description': self.description
        }


class Comment(models.Model):
    title = models.CharField(max_length=255, default='', null=True)
    text = models.CharField(max_length=255, default='', null=True)

    class Meta:
        verbose_name = 'Comment',
        verbose_name_plural = 'Comments'

    def __str__(self):
        return f'{self.id}: {self.title}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.title,
            'text': self.text,
        }