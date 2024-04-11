from django.http import JsonResponse
from customers.models import Customer

def customer_list(request):
    return JsonResponse(
      [{
        'id': customer.id,
        'name': customer.name,
        'email': customer.email
      } for customer in Customer.objects.all()],
      safe = False
    )
