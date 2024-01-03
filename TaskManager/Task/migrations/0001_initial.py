# Generated by Django 4.0.5 on 2023-12-28 01:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=255)),
                ('finished', models.BooleanField(default=False)),
                ('due_date', models.DateField()),
                ('input_time', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
