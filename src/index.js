import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './screens/Router';
import { initializeApp } from 'firebase/app';
import { CartContextProvider } from './components/CartContext/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyDvCjP19XyvSKH5vDh08uxHEf2Y8M1nOUY",
  authDomain: "ecom-feria-libre.firebaseapp.com",
  projectId: "ecom-feria-libre",
  storageBucket: "ecom-feria-libre.appspot.com",
  messagingSenderId: "813607308494",
  appId: "1:813607308494:web:a73f0e7f95e5e9532fd49f"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <Router />
    </CartContextProvider>
  </React.StrictMode>
);
