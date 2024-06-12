const BASE_URL = 'http://localhost:3001'; // Change the URL to match your server API

// Function to fetch data from the server API
const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};