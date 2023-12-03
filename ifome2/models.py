from django.db import models

class Lanche(models.Model):
    nome_vendedor = models.CharField(max_length=255)
    produto_oferecido = models.CharField(max_length=255)
    preçodoproduto= models.DecimalField( max_digits=10, decimal_places=2, default=0.00)
    curso = models.CharField(max_length=255)
    contato = models.CharField(max_length=20)
    foto = models.ImageField(upload_to='media/', null=True, blank=True)
    def __str__(self):
      return self.nome_vendedor

def foto_url(self):
        if self.foto and hasattr(self.foto, 'url'):
            return self.foto.url
        else:
            return "D:\IFome\IFOME\static\css\media" 
