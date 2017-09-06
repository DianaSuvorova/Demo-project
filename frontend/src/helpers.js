export const apiBase = 'http://localhost:8080/api';

// tests
export const mockResponse = (status, statusText, response) =>
  new window.Response(response, {
    status,
    statusText,
    headers: {
      'Content-type': 'application/json',
    },
  });
