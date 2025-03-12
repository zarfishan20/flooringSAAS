import React, { useState, useEffect } from 'react';
import { getCustomers, addCustomer, deleteCustomer } from '../utils/api';
import { useNavigate } from 'react-router-dom';


const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '', address: '' });
const navigate = useNavigate();
    // Fetch customers on component mount
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const data = await getCustomers();
                setCustomers(data);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };
        fetchCustomers();
    }, []);

    // Handle form input change
    const handleChange = (e) => {
        setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
    };

    // Handle add customer form submission
    const handleAddCustomer = async (e) => {
        e.preventDefault();
        try {
            const addedCustomer = await addCustomer(newCustomer);
            setCustomers([...customers, addedCustomer]);
            setNewCustomer({ name: '', email: '', phone: '', address: '' });  // Reset form
        } catch (error) {
            console.error('Error adding customer:', error);
        }
    };

    // Handle delete customer
    const handleDeleteCustomer = async (id) => {
        try {
            await deleteCustomer(id);
            setCustomers(customers.filter((customer) => customer._id !== id));
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Customers</h2>

            {/* Add Customer Form */}
            <form onSubmit={handleAddCustomer} className="mb-4">
                <div className="mb-3">
                    <input
                        type="text"
                        name="name"
                        value={newCustomer.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        value={newCustomer.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="phone"
                        value={newCustomer.phone}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Phone"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="address"
                        value={newCustomer.address}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Address"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Customer</button>
            </form>

            {/* Customer List */}
            <div className="list-group">
                {customers.map((customer) => (
                    <div key={customer._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-1">{customer.name}</h5>
                            <p className="mb-1">{customer.email}</p>
                        </div>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDeleteCustomer(customer._id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Customers;
