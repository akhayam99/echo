import os
import django
from customers.models import Customer
from faker import Faker

# def setup_django():
#     # Set the DJANGO_SETTINGS_MODULE environment variable
#     os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'app.settings')
#     # Configure Django settings
#     django.setup()


def create_customers():
    fake = Faker()
    for _ in range(10):
        name = fake.name()
        email = fake.email()
        phone = fake.phone_number()
        customer = Customer(name=name, email=email, phone=phone)
        customer.save()

if __name__ == '__main__':
    # setup_django()  # Call setup_django() before accessing Django models
    create_customers()
