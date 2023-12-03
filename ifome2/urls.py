from django.urls import path
from . import views
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),    
    path ('', views.ifome, name="IFome"),
    path('cadastrar/', views.cadastrar, name='cadastrar'),
    path('ifome', views.home, name='ifome'),
    path('salvar/', views.salvar, name='salvar')
]   

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)