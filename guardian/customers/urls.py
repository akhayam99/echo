from django.urls import path
from . import views

urlpatterns = [
    path('', views.list, name='customer-list'),
    path('', views.create, name='customer-create'),
]
