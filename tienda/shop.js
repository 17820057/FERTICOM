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