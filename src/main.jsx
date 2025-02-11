import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.jsx";
import './index.css';

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
        <footer className="App-footer">
            <p>© 2025 Kurumsal Site</p>
        </footer>
    </React.StrictMode>
);
