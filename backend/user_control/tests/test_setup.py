from rest_framework.test import APITestCase
from django.urls import reverse
from faker import Faker


class TestSetUp(APITestCase):

    def setUp(self):
        self.registration_url = reverse('register')
        self.login_url = reverse('token_obtain_pair')
        self.faker = Faker()

        self.user_data = {
            "email": self.faker.email(),
            "name": self.faker.name(),
            "password": self.faker.password()
        }

        return super().setUp()

    def tearDown(self):
        return super().tearDown()
