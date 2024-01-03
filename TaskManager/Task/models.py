from django.db import models

# Create your models here.

class Todo(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255)
    finished = models.BooleanField(blank=True, null=True, default=False )
    due_date = models.DateField()
    input_time = models.DateTimeField(auto_now=True)
