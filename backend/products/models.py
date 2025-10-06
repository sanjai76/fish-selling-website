from django.db import models

# Create your models here.

from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    stock = models.IntegerField()
    image = models.ImageField(upload_to="fish_images/", blank=True, null=True)

    def _str_(self):
        return self.name
    
    
    
    
from django.db import models

class Offer(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    discount = models.DecimalField(max_digits=5, decimal_places=2)  # %
    valid_till = models.DateField()

    def _str_(self):
        return self.title