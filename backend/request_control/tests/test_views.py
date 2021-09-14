import json
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from request_control.models import *
from request_control.serializers import RequestModelSerializer


# initialize the APIClient app
client = Client()

class TestRequestControlViews(TestCase):

    def setUp(self):
        RequestModel.objects.create(
            patient_name='Test Patient 1', gender='Male', blood_group='AB+', location='Dhaka, Bangladesh', needed_within='2021-09-25', phone='01234567898', note='This is note')
        RequestModel.objects.create(
             patient_name='Test Patient 2', gender='Female', blood_group='AB+', location='Dhaka, Bangladesh', needed_within='2021-09-25', phone='01234567898', note='This is note')
        RequestModel.objects.create(
             patient_name='Test Patient 3', gender='Male', blood_group='AB+', location='Dhaka, Bangladesh', needed_within='2021-09-25', phone='01234567898', note='This is note')

    # def test_create_request(self):
    #     response = self.client.post(reverse("create-request"))
    #     self.assertEquals(response.status_code, 200)

    def test_get_all_request(self):
        print("Test get all request")
        # get API response
        response = client.get(reverse('get-all-requests'))
        # get data from db
        requests = RequestModel.objects.all()
        serializer = RequestModelSerializer(requests, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_single_request(self):
        print("Test get single request")
        # get API response
        response = client.get(reverse('request-details', args=['1']))
        # get data from db
        request = RequestModel.objects.get(id=1)
        serializer = RequestModelSerializer(request, many=False)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # def test_update_request(self):
    #     print("Test update request")
    #     self.payload = {
    #         'patient_name': 'Alice',
    #         'gender': 'Male',
    #         'blood_group': 'O-',
    #         'location': 'Alice',
    #         'needed_within': '2021-08-30',
    #         'phone': '157823459',
    #         'note': 'Note changed',
    #     }
    #     # get API response
    #     response = client.put(
    #         reverse('update-request', args=['1']),
    #         data=json.dumps(self.payload),
    #         content_type='application/json',
    #         )
    #     # get data from db
    #     request = RequestModel.objects.get(id=1)
    #     serializer = RequestModelSerializer(request, many=False)
    #     self.assertEqual(response.data, serializer.data)
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)

#     def test_delete_request(self):
#         url = reverse('delete-request', args=['1'])
#         self.assertEquals(resolve(url).func, deleteRequest)
