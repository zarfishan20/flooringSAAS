import axios from 'axios';


const API_URL = 'http://localhost:5000/api/customers';  // Backend API URL


// Create an axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
export default api;
// Authentication API

// Login user
export const loginUser = async (userData) => {
    try {
        const response = await api.post("/auth/login", userData);
        return response.data;  // { token, user }
    } catch (error) {
        console.error("Error logging in:", error);
        throw error.response ? error.response.data : error.message;
    }
};

// Register user
export const registerUser = async (userData) => {
    try {
        const response = await api.post("/auth/register", userData);
        return response.data;  // { message }
    } catch (error) {
        console.error("Error registering:", error);
        throw error.response ? error.response.data : error.message;
    }
};

// Fetch all users
export const getUsers = async () => {
    try {
        const response = await api.get("/users");
        return response.data;  // [{ user }]
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error.response ? error.response.data : error.message;
    }
};

// Get user by ID
export const getUserById = async (id) => {
    try {
        const response = await api.get(`/users/${id}`);
        return response.data;  // { user }
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error.response ? error.response.data : error.message;
    }
};

// Update user
export const updateUser = async (id, userData) => {
    try {
        const response = await api.put(`/users/update/${id}`, userData);
        return response.data;  // { updatedUser }
    } catch (error) {
        console.error("Error updating user:", error);
        throw error.response ? error.response.data : error.message;
    }
};

// Delete user
export const deleteUser = async (id) => {
    try {
        const response = await api.delete(`/users/delete/${id}`);
        return response.data;  // { message }
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error.response ? error.response.data : error.message;
    }
};

// Export axios instance for other API calls


// Fetch all customers
export const getCustomers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching customers:', error);
        throw error;
    }
};

// Add a new customer
export const addCustomer = async (customerData) => {
    try {
        const response = await axios.post(`${API_URL}/add`, customerData);
        return response.data;
    } catch (error) {
        console.error('Error adding customer:', error);
        throw error;
    }
};

// Get a specific customer
export const getCustomerById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching customer by ID:', error);
        throw error;
    }
};

// Update a customer
export const updateCustomer = async (id, customerData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, customerData);
        return response.data;
    } catch (error) {
        console.error('Error updating customer:', error);
        throw error;
    }
};

// Delete a customer
export const deleteCustomer = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting customer:', error);
        throw error;
    }
};
