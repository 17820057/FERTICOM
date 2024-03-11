
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCd4XKL1-Rx2drRmf95RN4jE7x1pUPFTzU",
    authDomain: "ferticom-prueba.firebaseapp.com",
    projectId: "ferticom-prueba",
    storageBucket: "ferticom-prueba.appspot.com",
    messagingSenderId: "163429402522",
    appId: "1:163429402522:web:8cf3f1dbc70728d147dc23",
    measurementId: "G-DCH6X2S5SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
