import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";  // Import Provider
import { store } from "./redux/store";
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './theme.scss'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>  {/* Wrap your app with Provider */}
        <App />
    </Provider>
)
