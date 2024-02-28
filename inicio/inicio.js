const sliderinicio = document.querySelector('.sliderinicio');
const figures = sliderinicio.querySelectorAll('li');
let currentIndex = 0;

function showSlide() {
  for (let i = 0; i < figures.length; i++) {
    figures[i].style.opacity = 0;
  }
  figures[currentIndex].style.opacity = 1;
  currentIndex = (currentIndex + 1) % figures.length;
}

setInterval(showSlide, 3000);
showSlide();