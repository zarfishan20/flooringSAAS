import axios from 'axios';

const API_URL = 'http://localhost:5000/api/customers';  // Backend API URL

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
