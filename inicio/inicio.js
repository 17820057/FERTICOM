// SLIDER AUTOMATICO ANIMACION

const sliderInicio = document.querySelector('.sliderinicio');
const slides = sliderInicio.querySelectorAll('li');
// const totalSlides = slides.length;
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.opacity = 0;
        slide.style.zIndex = 0;
        // slide.style.display = 'none';
    });

    slides[index].style.opacity = 1;
    slides[index].style.zIndex = 1;
    // slides[index].style.display = 'block';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    // currentIndex = (currentIndex + 1) % totalSlides;
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



  
  

