import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVK2tyfe2k1W-0QYT4qrr1Gy3EAxr8atU",
  authDomain: "proyecto-react-mascarpone.firebaseapp.com",
  projectId: "proyecto-react-mascarpone",
  storageBucket: "proyecto-react-mascarpone.appspot.com",
  messagingSenderId: "979616093415",
  appId: "1:979616093415:web:463e2815c49fc38b9bfe42",
  measurementId: "G-92HSSGPEHZ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
