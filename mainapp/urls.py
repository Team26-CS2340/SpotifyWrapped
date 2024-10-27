from django.urls import path
from .views.auth import sign_in, register, sign_out, home, top_tracks
from . import views

# mainapp/urls.py

urlpatterns = [
    path('', home, name='home'),
    path('top-tracks/', top_tracks, name='top_tracks'), 
    path('login/', sign_in, name='sign_in'),
    path('register/', register, name='register'),
    path('logout/', sign_out, name='sign_out'),
]