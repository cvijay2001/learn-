import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
    <h1>from react dom</h1>
  </React.StrictMode>,
)
