import django

def create_customers():
    from customers.models import Customer
    from faker import Faker

    fake = Faker()
    for _ in range(10):
        name = fake.name()
        email = fake.email()
        phone = fake.phone_number()[:15]
        customer = Customer(name=name, email=email, phone=phone)
        customer.save()

if __name__ == '__main__':
    django.setup()
    create_customers()
