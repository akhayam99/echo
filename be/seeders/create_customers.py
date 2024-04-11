from customers.models import Customer
from faker import Faker

def create_customers():
    fake = Faker()
    for _ in range(10):
        name = fake.name()
        email = fake.email()
        phone = fake.phone_number()
        customer = Customer(name=name, email=email, phone=phone)
        customer.save()

if __name__ == '__main__':
    create_customers()
