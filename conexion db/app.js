
document.getElementById('miFormulario').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;

    // if (nombre.trim() === '') {
    //     alert('Por favor, ingresa tu nombre.');
    //     return;
    // }

    // const correoValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo);
    // if (!correoValido) {
    //     alert('Por favor, ingresa un correo electrónico válido.');
    //     return;
    // }

    // if (contraseña.length < 6) {
    //     alert('La contraseña debe tener al menos 6 caracteres.');
    //     return;
    // }

    const formData = {
        nombre: nombre,
        correo: correo,
        contraseña: contraseña
    };

    fetch('/registrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

// document.getElementById('miFormulario').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const formData = {
//         nombre: document.getElementById('nombre').value,
//         correo: document.getElementById('correo').value,
//         contraseña: document.getElementById('contraseña').value
//     };

//     fetch('/registrar', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//     })
//     .then(response => response.text())
//     .then(data => {
//         alert(data);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// });