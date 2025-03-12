import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MobileNavbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Quotes from './pages/Quotes';
import Projects from './pages/Projects';
import Customers from './pages/Customer';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000")
            .then(response => setMessage(response.data))
            .catch(error => console.error(error));
    }, []);

    return (

        <Router>
            <div className="app">
                {/* Navbar for mobile */}
                <MobileNavbar />
                <Sidebar />
            

                <div className="content">
                    <Routes>
                      
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/dashboard" element={<Dashboard/>} />
                        <Route path="/inventory" element={<Inventory/>} />
                        <Route path="/quotes" element={<Quotes/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/customers" element={<Customers/>} />
                        {/* Add more routes as necessary */}
                        </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;