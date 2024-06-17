import React from 'react'
import ReactDOM from 'react-dom/client' // virtual DOM
import App from './App.jsx' // imported the component in App.jsx
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render( // tells where to put all of the HTML
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
