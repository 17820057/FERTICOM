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
