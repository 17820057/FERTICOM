    document.addEventListener('DOMContentLoaded', function() {
        const seccionFondo = document.querySelector('.seccion-fondo');
        // Función callback para el IntersectionObserver
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                // Verifica si el elemento está intersectando
                if (entry.isIntersecting) {
                    // Añade la clase 'zoom-activo' si el elemento entra en la pantalla
                    entry.target.classList.add('zoom-activo');
                } else {
                    //+remueve la clase si el elemento sale de la pantalla
                    entry.target.classList.remove('zoom-activo');
                }
            });
        };
        // Opciones para el IntersectionObserver
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(seccionFondo);
    });

    document.addEventListener('DOMContentLoaded', function() {
        const testimonials = document.querySelectorAll('.testimonials');
        let current = 0; // Índice del testimonio actual
        // Función para iniciar el carrusel
        function startSlide() {
            testimonials.forEach((testimonial, index) => {
                testimonial.style.display = 'none'; // Oculta todos los testimonios
            });
            // Cicla a través de los testimonios
            if (current >= testimonials.length) {
                current = 0; // Vuelve al inicio si se ha llegado al final
            }
            // Prepara el próximo testimonio para la transición
            testimonials[current].style.display = 'block'; // Muestra el testimonio actual
            testimonials[current].classList.add('active'); // Agrega la clase 'active'

            // Espera 4 segundos antes de cambiar al siguiente testimonio
            setTimeout(() => {
                // Prepara la salida del testimonio actual
                testimonials[current].classList.add('out');
                setTimeout(() => {
                    testimonials[current].classList.remove('active', 'out');
                    testimonials[current].style.display = 'none'; // Oculta el testimonio que acaba de salir
                    current++; // Mueve al siguiente testimonio
                    startSlide(); // Repite el proceso
                }, 900); // Espera que termine la transición de salida
            }, 8000); // Tiempo visible de cada testimonio
        }

        startSlide(); // Inicia la función del carrusel
    });

    //AUTENTICACION GOOGLE//

    function googleSignIn() {
        gapi.auth2.init({
            client_id: '300408749541-126blkck1anuimcs6su0canbggqflpp4.apps.googleusercontent.com',
            scope: 'email profile openid'
        }).then((auth2) => {
            auth2.signIn().then((googleUser) => {
                // El usuario ha iniciado sesión correctamente
                const profile = googleUser.getBasicProfile();
                const idToken = googleUser.getAuthResponse().id_token;

                // Procesar los datos del usuario
                processUserData(profile);

                // Redirigir al usuario
                redirectToProfile();

                // Aquí puedes enviar el token de ID al backend para verificar la autenticación
                // Ejemplo de cómo hacer una solicitud POST con fetch
                fetch('/login/google', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id_token: idToken })
                }).then((response) => {
                    // Manejar la respuesta del servidor
                }).catch((error) => {
                    console.error('Error al iniciar sesión con Google:', error);
                });
            }).catch((error) => {
                console.error('Error al iniciar sesión con Google:', error);
            });
        }).catch((error) => {
            console.error('Error al inicializar el SDK de Google:', error);
        });
    }

    // Función para procesar los datos del usuario obtenidos de Google
    function processUserData(user) {
        // Accede a las propiedades name y email del objeto user proporcionado por Google
        const userName = user.getName();
        const userEmail = user.getEmail();

        // Aquí puedes realizar cualquier operación necesaria con los datos del usuario
        console.log('Nombre del usuario:', userName);
        console.log('Email del usuario:', userEmail);

        // Por ejemplo, podrías enviar los datos del usuario al backend para actualizar la base de datos
        fetch('/actualizar-usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((response) => {
            // Manejar la respuesta del servidor
        }).catch((error) => {
            console.error('Error al actualizar el usuario:', error);
        });
    }   

    // Función para redirigir al usuario al perfil o a la página de inicio después de la autenticación
    function redirectToProfile() {
        // Aquí puedes redirigir al usuario a su perfil o a la página de inicio, según corresponda
        // Por ejemplo, podrías utilizar window.location.href para redirigir
        window.location.href = '/perfil';
        // function redirectToProfile() {
        //     const profileURL = '/perfil'; // URL de la página de perfil del usuario
        //     window.location.href = profileURL; // Redirigir al usuario a su perfil
        // }
        
    }