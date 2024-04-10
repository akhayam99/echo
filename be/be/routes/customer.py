from django.http import JsonResponse

def index(request):
    return JsonResponse([
      {
        "id": 1,
        "name": "John Doe",
        "email": "",
        "phone": "",
      },
      {
        "id": 2,
        "name": "Jane Doe",
        "email": "",
        "phone": "",
      },
      {
        "id": 3,
        "name": "John Smith",
        "email": "",
        "phone": "",
      },
      {
        "id": 4,
        "name": "Jane Smith",
        "email": "",
        "phone": "",
      },
      {
        "id": 5,
        "name": "John Johnson",
        "email": "",
        "phone": "",
      }
    ], safe = False
  )
