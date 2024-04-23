from django.http import JsonResponse
from faker import Faker
from customers.models import Customer
from .models import Customer

def list(request):
    if request.method == 'GET':
      return JsonResponse(
        [{
          'id': customer.id,
          'name': customer.name,
          'email': customer.email
        } for customer in Customer.objects.all()],
        safe = False
      )

def create(request):
    if request.method == 'POST':
      fake = Faker()
      name = fake.name()
      email = fake.email()
      phone = fake.phone_number()[:15]
      customer = Customer(name=name, email=email, phone=phone)
      customer.save()
      return JsonResponse({
        'id': customer.id,
        'name': customer.name,
        'email': customer.email,
        'phone': customer.phone,
      }, safe=False)
