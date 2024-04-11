import django
import random

def create_products():
  from customers.models import Customer
  from products.models import Product
  from faker import Faker

  fake = Faker()
  for customer in Customer.objects.all():
      num_products = random.randint(5, 10)
      for _ in range(num_products):
          name = fake.word().capitalize()
          price = fake.random_number(digits=2)
          description = fake.text()
          product = Product(name=name, price=price, description=description, customer=customer)
          product.save()

if __name__ == '__main__':
    django.setup()
    create_products()
