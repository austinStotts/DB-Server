import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Create from './CreateShow/Create';
import Login from './googleLogin/login';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let l = window.location

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

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
