import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Create from './CreateShow/Create';
import Login from './googleLogin/login';


const root = ReactDOM.createRoot(document.getElementById('root'));
let l = window.location
console.log(l)

if(l.pathname === "/create") {
  root.render(
    <React.StrictMode>
      <Create />
    </React.StrictMode>
  );
} else if (l.pathname === "/login") {
  root.render(
    <React.StrictMode>
      <Login />
    </React.StrictMode>
  )
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


