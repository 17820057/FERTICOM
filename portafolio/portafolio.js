
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.setAttribute('id', 'first-clone');
  lastClone.setAttribute('id', 'last-clone');
  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slider.firstChild);

  let currentIndex = 1; // Asume que el primer elemento visible es el primer slide real, no un clon
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(${-(slideWidth * currentIndex)}px)`;

  const moveSlider = () => {
      // Cuando el carrusel alcanza el último clon, reinicia al primer slide real
      if (currentIndex >= slides.length + 1) {
          currentIndex = 1; // Evita el salto visual reiniciando la posición sin animación
          slider.style.transition = "none";
          slider.style.transform = `translateX(${-(slideWidth * currentIndex)}px)`;
      } else {
          slider.style.transition = "transform 0.5s ease-out";
          currentIndex++;
          slider.style.transform = `translateX(${-(slideWidth * currentIndex)}px)`;
      }
  };

  // mover el carrusel cada 3 segundos
  setInterval(() => {
      moveSlider();
  }, 3000);

  slider.addEventListener('transitionend', () => {
      if (slides[currentIndex].id === 'first-clone') {
          slider.style.transition = "none"; // Desactiva la transición para ajustar la posición
          currentIndex = 1;
          slider.style.transform = `translateX(${-(slideWidth * currentIndex)}px)`;
      }
  });

  // Manejo de popups
  document.querySelectorAll('.slide').forEach(slide => {
      slide.addEventListener('click', function() {
          const target = this.getAttribute('data-target');
          if(target) {
              const popup = document.getElementById(target);
              if(popup) popup.style.display = 'flex';
          }
      });
  });

  document.querySelectorAll('.popup').forEach(popup => {
      popup.addEventListener('click', () => {
          popup.style.display = 'none';
      });
  });
});


