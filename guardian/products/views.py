from django.http import JsonResponse
from products.models import Product

def product_list(request):
    return JsonResponse(
        [{
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'customer_id': product.customer_id
        } for product in Product.objects.all()],
        safe = False
    )
