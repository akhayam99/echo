import django

if __name__ == '__main__':
    django.setup()
    from create_customers import create_customers
    from create_products import create_products
    create_customers()
    create_products()
