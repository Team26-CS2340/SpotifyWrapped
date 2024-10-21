from django.urls import path
from .views.auth import sign_in, register, sign_out

urlpatterns = [
    path('login/', sign_in, name='sign_in'),
    path('register/', register, name='register'),
    path('logout/', sign_out, name='sign_out'),
]