from django.shortcuts import render # type: ignore

# Create your views here.

from rest_framework import viewsets, permissions
from .models import Product
from .serializers import ProductSerializer
from rest_framework.response import Response

class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    def list(self, request):
        queryset = Product.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    
    
    
from .models import Offer
from .serializers import OfferSerializer

class OfferViewSet(viewsets.ModelViewSet):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer