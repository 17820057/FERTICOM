
import { ManageAccount } from './firebaseconect.js';

document.getElementById("googlelogin").addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const account = new ManageAccount();
    account.authenticate(email, password);

});

console.log('Formulario de Inicio de Sesión');



// document.getElementById('googlelogin').addEventListener('click', function () {
//     var provider = new firebase.auth.GoogleAuthProvider();
//     // Cambia de signInWithPopup a signInWithRedirect
//     firebase.auth().signInWithRedirect(provider);
// });
// document.getElementById('miBoton').addEventListener('click', function() {
//     var provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithRedirect(provider);
//     // No hay necesidad de manejar el resultado aquí; eso se hace después de la redirección.
// });

// // Ahora, debes manejar el resultado del inicio de sesión después de que el usuario es redirigido de vuelta a tu aplicación.
// // Coloca este bloque de código en un lugar que se ejecute cuando tu aplicación se carga, por ejemplo, al principio de tu script principal.
// firebase.auth().getRedirectResult().then((result) => {
//     if (result.user) {
//         // Esto se ejecutará si el usuario se ha autenticado correctamente después de ser redirigido.
//         // Esto te da un token de acceso de Google. Puedes usarlo para acceder a la API de Google.
//         var token = result.credential.accessToken;
//         // La información del usuario logueado.
//         var user = result.user;
//         // Aquí puedes añadir lo que quieras hacer con la información del usuario o con el token.
//     }
// }).catch((error) => {
//     // Maneja los errores que puedan ocurrir durante signInWithRedirect o getRedirectResult.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // El correo electrónico de la cuenta del usuario utilizado.
//     var email = error.email;
//     // El tipo de firebase.auth.AuthCredential que fue utilizado.
//     var credential = error.credential;
//     // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje al usuario.
// });


// document.getElementById('googlelogin').addEventListener('click', function () {
//     var provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth()
//         .signInWithPopup(provider)
//         .then((result) => {
//             // Esto te da un token de acceso de Google. Puedes usarlo para acceder a la API de Google.
//             var token = result.credential.accessToken;
//             // La información del usuario logueado.
//             var user = result.user;
//             // ...
//         }).catch((error) => {
//             // Maneja los errores aquí.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // El correo electrónico de la cuenta del usuario utilizado.
//             var email = error.email;
//             // El tipo de firebase.auth.AuthCredential que fue utilizado.
//             var credential = error.credential;
//             // ...
//         });
// });

