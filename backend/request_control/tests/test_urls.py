from rest_framework.test import APITestCase
from django.urls import reverse, resolve
from request_control.views import *


class TestRequestControlUrls(APITestCase):

    def test_create_request(self):
        url = reverse("create-request")
        self.assertEquals(resolve(url).func, createRequest)

    def test_get_all_request(self):
        url = reverse('get-all-requests')
        self.assertEquals(resolve(url).func, getAllRequests)

    def test_get_single_request(self):
        url = reverse('request-details', args=['1'])
        self.assertEquals(resolve(url).func, getSingleRequest)

    def test_update_request(self):
        url = reverse('update-request', args=['1'])
        self.assertEquals(resolve(url).func, updateRequest)

    def test_delete_request(self):
        url = reverse('delete-request', args=['1'])
        self.assertEquals(resolve(url).func, deleteRequest)
