// URL of the API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Use fetch to make a GET request to the API
fetch(apiUrl)
  .then(response => {
    // Check if the response is okay (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Convert the response to JSON format
    return response.json();
  })
  .then(data => {
    // Use the fetched data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('There was a problem with the fetch operation:', error);
  });
