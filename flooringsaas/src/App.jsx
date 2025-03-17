import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import RoleBasedRoute from "./components/RoleBasedRoute";
import NotFound from "./pages/NotFound";
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Quotes from './pages/Quotes';
import Projects from './pages/Projects';
import Customers from './pages/Customer';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';

const App = () => {
    const [message, setMessage] = useState("");
    const user = useSelector((state) => state.auth?.user) || null;
    useEffect(() => {
        axios.get("http://localhost:5000")
            .then(response => setMessage(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
        <Router>
            <div className="app">
                {/* Navbar for mobile */}
                    <Navbar />
                

                <div className="content">
                    <Routes>
                      
                        <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            {/* Protected Routes - Only accessible if the user is logged in */}
                            <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />

                            {/* 404 Route */}
                            <Route path="*" element={<NotFound />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/inventory" element={<Inventory/>} />
                        <Route path="/quotes" element={<Quotes/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="/customers" element={<Customers/>} />
                        {/* Add more routes as necessary */}
                        </Routes>
                </div>
            </div>
        </Router>

         {/* Footer */ }
    <Footer />
    </>
    );
}

export default App;