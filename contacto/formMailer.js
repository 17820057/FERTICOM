document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("23wfvt3dw5q7Kjkwl"); // Tu User ID de EmailJS aquí

    document.getElementById('mi-formulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío estándar del formulario

        // Enviar el formulario usando EmailJS
        emailjs.sendForm('service_3jn0d6x', 'template_fej6kdo', this)
            .then(function() {
                // Limpia el formulario después del envío exitoso
                document.getElementById('mi-formulario').reset();

                // Recarga la página
                window.location.reload();
            }, function(error) {
                // alert('Falló el envío del mensaje: ' + JSON.stringify(error));
            });
    });
});
// document.addEventListener('DOMContentLoaded', function() {
//     // Inicializa EmailJS con tu User ID
//     emailjs.init("7kYKvE2ombCfp_HPIkMZU");

//     // Evento de envío del formulario
//     document.getElementById('mi-formulario').addEventListener('submit', async function(event) {
//         event.preventDefault(); // Previene el envío estándar del formulario

//         // Validación del formulario antes de enviar
//         if (!validarFormulario()) {
//             document.getElementById('mensaje-error').innerText = "Por favor, completa todos los campos requeridos correctamente.";
//             return;
//         }

//         // Muestra un indicador de carga o un mensaje al usuario
//         document.getElementById('cargando').style.display = 'block';

//         try {
//             // Enviar el formulario usando EmailJS
//             await emailjs.sendForm('service_3jn0d6x', 'template_fej6kdo', this);
//             // Oculta el indicador de carga
//             document.getElementById('cargando').style.display = 'none';
//             // Muestra un mensaje de éxito
//             document.getElementById('mensaje-exito').style.display = 'block';
//             document.getElementById('mensaje-exito').innerText = "Mensaje enviado con éxito. ¡Gracias por contactarnos!";
//             // Limpia el formulario después del envío exitoso
//             document.getElementById('mi-formulario').reset();
//         } catch (error) {
//             // Oculta el indicador de carga
//             document.getElementById('cargando').style.display = 'none';
//             // Muestra un mensaje de error
//             document.getElementById('mensaje-error').innerText = "Falló el envío del mensaje. Por favor, inténtalo de nuevo más tarde.";
//         }
//     });
// });
