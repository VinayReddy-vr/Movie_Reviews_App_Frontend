import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080', // Set the base URL to your Spring Boot backend
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers if needed
  }
});
