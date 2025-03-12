import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: 'rgb(69, 97, 133)' }}>
            <div className="container text-center">
                <h1 className="text-white mb-4">Welcome to Our Platform</h1>
                <p className="text-white mb-5">Please login or sign up to continue.</p>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <Link to="/login">
                            <button className="btn btn-primary btn-lg w-100" style={{ backgroundColor: '#424242' }}>Login</button>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/signup">
                            <button className="btn btn-secondary btn-lg w-100" style={{ backgroundColor: '#acafb4' }}>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
