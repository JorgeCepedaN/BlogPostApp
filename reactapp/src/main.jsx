import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import './index.css'
import configureStore from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={configureStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
,
)
