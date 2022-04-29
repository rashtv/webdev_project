from django.contrib import admin

from api.models import Beer, Champagne, Wine, Vodka, Comment

admin.site.register(Beer)
admin.site.register(Champagne)
admin.site.register(Wine)
admin.site.register(Vodka)
admin.site.register(Comment)
