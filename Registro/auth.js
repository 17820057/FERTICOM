// // Escucha el evento click en el botón de login
// document.getElementById('googlelogin').addEventListener('click', googleLogin);

// function googleLogin() {
//     var provider = new firebase.auth.GoogleAuthProvider(); // Crea una instancia del proveedor de Google
//     firebase.auth().signInWithPopup(provider) // Inicia el proceso de login con una ventana emergente
//         .then((result) => {
//             // Esto te da un token de acceso a Google. Puedes usarlo para acceder a la API de Google.
//             var token = result.credential.accessToken;
//             // La información del usuario logueado
//             var user = result.user;
//             console.log(user); // Haz algo con la información del usuario (por ejemplo, mostrarla en la consola)
//         }).catch((error) => {
//             // Maneja los errores aquí
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log(errorCode, errorMessage);
//         });
// }
