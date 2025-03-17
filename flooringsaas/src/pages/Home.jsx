import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="home-container">
            <div className="content-container text-center fade-in">
                <h1 className="title">Welcome to Our Platform</h1>
                <p className="sub-title">Please login or sign up to continue.</p>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <Link to="/login">
                            <button className="btn btn-primary btn-lg w-100 login-btn">
                                <span className="btn-text">Login</span>
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/signup">
                            <button className="btn btn-secondary btn-lg w-100 signup-btn">
                                <span className="btn-text">Sign Up</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
