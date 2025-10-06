from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, OfferViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='products')
router.register(r'offers', OfferViewSet, basename='offers')

urlpatterns = router.urls
