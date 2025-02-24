import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  test('Validate friend API with non-existent user', async ({ request }) => {
    const userID = 'H37KS5'; // Example user ID that does not exist
    const country = 'se'; // Example country code
    const apiUrl = `https://inte-services.cinema-api.com/Preference/validatefriend/${country}?code=${userID}`; // Example API URL

    // Make the API call
    const response = await request.get(apiUrl);

    // Check that the response status is 200 (OK)
    expect(response.status()).toBe(200);

    // Read the response body
    const responseBody = await response.json();

    // Perform assertions on the response body
    console.log(responseBody); // Print the response body for debugging

    // Adjust the assertions based on the expected response for a non-existent user
    expect(responseBody).toBe(false); // Example assertion
    
  });
});