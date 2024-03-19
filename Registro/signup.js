import { ManageAccount } from './firebaseconect.js';

document.getElementById("googlelogin").addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const account = new ManageAccount();
    account.register(email, password);

});

console.log('Formulario de Registro');