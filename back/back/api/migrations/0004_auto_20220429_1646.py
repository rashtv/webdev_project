# Generated by Django 2.2 on 2022-04-29 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20220429_1613'),
    ]

    operations = [
        migrations.AddField(
            model_name='beer',
            name='price',
            field=models.CharField(default='0', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='champagne',
            name='price',
            field=models.CharField(default='0', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='vodka',
            name='price',
            field=models.CharField(default='0', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='wine',
            name='price',
            field=models.CharField(default='0', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='beer',
            name='description',
            field=models.CharField(default='', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='champagne',
            name='description',
            field=models.CharField(default='', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='comment',
            name='text',
            field=models.CharField(default='', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='vodka',
            name='description',
            field=models.CharField(default='', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='wine',
            name='description',
            field=models.CharField(default='', max_length=255, null=True),
        ),
    ]
