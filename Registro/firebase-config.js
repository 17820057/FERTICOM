// Importar las funciones necesarias de los SDKs de Firebase que necesitas
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

{/* Your web app's Firebase configuration */ }
{/* For Firebase JS SDK v7.20.0 and later, measurementId is optional */ }
const firebaseConfig = {
    apiKey: "AIzaSyCd4XKL1-Rx2drRmf95RN4jE7x1pUPFTzU",
    authDomain: "ferticom-prueba.firebaseapp.com",
    projectId: "ferticom-prueba",
    storageBucket: "ferticom-prueba.appspot.com",
    messagingSenderId: "163429402522",
    appId: "1:163429402522:web:86ad2f2b8087377a47dc23",
    measurementId: "G-E8NWJJFYWK"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Uso de Firebase Auth para iniciar sesión con Google
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider).then((result) => {
  // Manejar resultado
}).catch((error) => {
  // Manejar errores
});