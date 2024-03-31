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
                // Opcional: remueve la clase si el elemento sale de la pantalla
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
