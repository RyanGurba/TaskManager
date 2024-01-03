from .views import *
from django.urls import path

urlpatterns = [
    path('todos/<int:pk>', SingleTodoView.as_view(), name='todo-detail'),
    path('todos', MultipleTodosView.as_view(), name='todos'),
]