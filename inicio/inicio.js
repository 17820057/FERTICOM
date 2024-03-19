// SLIDER AUTOMATICO ANIMACION

const sliderInicio = document.querySelector('.sliderinicio');
const slides = sliderInicio.querySelectorAll('li');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.opacity = 0;
        slide.style.zIndex = 0;
    });

    slides[index].style.opacity = 1;
    slides[index].style.zIndex = 1;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(nextSlide, 3000);

// PARALLAX

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        document.querySelectorAll('.parallax-section').forEach(function(section) {
            const speed = -0.6;
            const sectionTop = section.offsetTop - window.pageYOffset;
            const moveAmount = sectionTop * speed;
            section.style.transform = 'translateY(' + moveAmount + 'px)';
        });
    });
});

// ZOOM IMAGENES

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'scale(1.2)';
                entry.target.style.transition = 'transform 0.7s ease-in-out';
            } else {
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, {
        threshold: 0.2 // Este valor determina qué porcentaje de la imagen debe estar visible para activar el zoom.
    });

    document.querySelectorAll('.imagenes-inicio img').forEach(img => {
        observer.observe(img);
    });
});

//TEXTO IZQUIERDA A DERECHA ANIMACION

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-text');
            } else {
                entry.target.classList.remove('animate-text');
            }
        });
    }, {
        threshold: 0.1
    });

    const elements = document.querySelectorAll('.main-text h3, .main-sub h3, .main-end h1');
    elements.forEach(element => observer.observe(element));
});


// video corporativo

const video = document.getElementById('promo-video');
const button = document.querySelector('.video-button');
const durationDisplay = document.querySelector('.video-duration');

// Función para actualizar la duración mostrada
function updateDuration() {
    const seconds = Math.ceil(video.duration - video.currentTime);
    const minutes = Math.floor(seconds / 60);
    durationDisplay.textContent = `${minutes}:${(seconds % 60).toString().padStart(2, '0')}`;
}

// Función para alternar la reproducción y pausa del video
function togglePlay() {
    if (video.paused) {
        video.play();
        button.textContent = 'Pausar ∥';
    } else {
        video.pause();
        button.textContent = 'Mirar ►';
    }
}

// Agregamos 'loadedmetadata' para establecer la duración inicial correctamente
video.addEventListener('loadedmetadata', updateDuration);

// Eventos para controlar los cambios en el botón y la duración
video.addEventListener('play', () => {
    button.textContent = 'Pausar ∥';
});

video.addEventListener('pause', () => {
    button.textContent = 'Mirar ►';
});

video.addEventListener('timeupdate', updateDuration);

// Si el video ya está cargado, actualizamos la duración directamente
if (video.readyState >= 2) {
    updateDuration();
}


// SLIDER AUTOMATICO VERTICAL FINAL INICIO

const sliderVertical = document.querySelector('.slider-vertical');
const slidesVertical = sliderVertical.querySelectorAll('li');
let currentVerticalIndex = 0;

function showVerticalSlide(index) {
    slidesVertical.forEach(slide => {
        slide.style.top = '100%'; // Todas las diapositivas se mueven hacia abajo
    });

    slidesVertical[index].style.top = '0'; // La diapositiva activa se mueve hacia arriba
}

function nextVerticalSlide() {
    currentVerticalIndex = (currentVerticalIndex + 1) % slidesVertical.length;
    showVerticalSlide(currentVerticalIndex);
}

showVerticalSlide(currentVerticalIndex);
setInterval(nextVerticalSlide, 3000);

  

  
  

