
// Ingresar en el head del index.html



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCd4XKL1-Rx2drRmf95RN4jE7x1pUPFTzU",
  authDomain: "ferticom-prueba.firebaseapp.com",
  projectId: "ferticom-prueba",
  storageBucket: "ferticom-prueba.appspot.com",
  messagingSenderId: "163429402522",
  appId: "1:163429402522:web:86ad2f2b8087377a47dc23",
  measurementId: "G-E8NWJJFYWK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export class ManageAccount {
  register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((_) => {
        window.location.href = "login.html";
        // Mostrar alerta de registro exitoso
        alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
      })
      .catch((error) => {
        console.error(error.message);
            // Mostrar alerta de error de registro
            alert("Error al registrar: " + error.message);
      });
  }

  authenticate(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((_) => {
        window.location.href = "index.html";
        // Mostrar alerta de inicio de sesión exitoso
        alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
      })
      .catch((error) => {
        console.error(error.message);
                // Mostrar alerta de error de inicio de sesión
                alert("Error al iniciar sesión: " + error.message);
      });
  }

  signOut() {
    signOut(auth)
      .then((_) => {
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}




// // Importar las funciones necesarias de los SDKs de Firebase que necesitas
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

// {/* Your web app's Firebase configuration */ }
// {/* For Firebase JS SDK v7.20.0 and later, measurementId is optional */ }
// const firebaseConfig = {
//     apiKey: "AIzaSyCd4XKL1-Rx2drRmf95RN4jE7x1pUPFTzU",
//     authDomain: "ferticom-prueba.firebaseapp.com",
//     projectId: "ferticom-prueba",
//     storageBucket: "ferticom-prueba.appspot.com",
//     messagingSenderId: "163429402522",
//     appId: "1:163429402522:web:86ad2f2b8087377a47dc23",
//     measurementId: "G-E8NWJJFYWK"
// };

// // Inicializar Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Uso de Firebase Auth para iniciar sesión con Google
// const provider = new GoogleAuthProvider();
// signInWithPopup(auth, provider).then((result) => {
//   // Manejar resultado
// }).catch((error) => {
//   // Manejar errores
// });