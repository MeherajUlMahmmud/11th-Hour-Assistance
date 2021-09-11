from .test_setup import TestSetUp


class TestViews(TestSetUp):
    def test_user_registration_with_no_data(self):
        """
        Tests that user registration with no data fails.
        """
        response = self.client.post(self.registration_url)
        self.assertEqual(response.status_code, 400)
    
    def test_user_registration_with_valid_data(self):
        """
        Tests that user registration with valid data succeeds.
        """
        response = self.client.post(self.registration_url, self.user_data)
        self.assertEqual(response.status_code, 200)
