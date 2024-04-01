document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("23wfvt3dw5q7Kjkwl"); // Tu User ID de EmailJS aquí

    document.getElementById('mi-formulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío estándar del formulario

        // Enviar el formulario usando EmailJS
        emailjs.sendForm('service_3jn0d6x', 'template_qtktpdt', this)
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
