import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './landing.jsx'
import Starting from './starting.jsx'
import Products from './products.jsx'
import Discovery from "./discovery.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Landing/>
    <Starting/>
    <Products/>
    <Discovery/>
  </React.StrictMode>
)
