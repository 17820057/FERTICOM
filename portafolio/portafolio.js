
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.slide').forEach(slide => {
//           slide.addEventListener('click', function() {
//             const target = this.getAttribute('data-target');
//             document.getElementById(target).style.display = 'flex';
//           });
//         });
      
//         // Eventos para cerrar los popups
//         document.querySelectorAll('.popup').forEach(popup => {
//           popup.addEventListener('click', () => {
//             popup.style.display = 'none';
//           });
//         });

//   const slider = document.querySelector('.slider');
//   const slides = Array.from(document.querySelectorAll('.slide'));

//   const cloneFirst = slides[0].cloneNode(true);
//   const cloneLast = slides[slides.length - 1].cloneNode(true);

//   cloneFirst.style.opacity = 0;
//   cloneLast.style.opacity = 0;

//   slider.appendChild(cloneFirst);
//   slider.insertBefore(cloneLast, slider.firstChild);

//   // Escuchamos el final de la animación para mover al principio sin transición
//   slider.addEventListener('transitionend', () => {
//       if (slider.style.transform === `translateX(calc(-14.2857% * 9))`) {
//           slider.style.transition = 'none';
//           slider.style.transform = 'translateX(0)';
//           slider.offsetWidth;
//           slider.style.transition = 'transform 0.5s ease-in-out';
//       }
//   });
// });


// document.addEventListener('DOMContentLoaded', () => {

//   document.querySelectorAll('.slide').forEach(slide => {
//               slide.addEventListener('click', function() {
//                 const target = this.getAttribute('data-target');
//                 document.getElementById(target).style.display = 'flex';
//               });
//             });
          
//             // Eventos para cerrar los popups
//             document.querySelectorAll('.popup').forEach(popup => {
//               popup.addEventListener('click', () => {
//                 popup.style.display = 'none';
//               });
//             });

            
            
//             const slider = document.querySelector('.slider');
//             let slides = Array.from(document.querySelectorAll('.slide'));
//             const firstClone = slides[0].cloneNode(true);
//             const lastClone = slides[slides.length - 1].cloneNode(true);
        
//             slider.appendChild(firstClone);
//             slider.insertBefore(lastClone, slider.firstChild);
        
//             // Actualiza la lista de slides para incluir los clones
//             slides = document.querySelectorAll('.slide');
        
//             const slideWidth = slides[0].clientWidth;
//             let currentIndex = 1; // Comienza en 1 para ignorar el clon final al principio
        
//             slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
//             slider.style.transition = 'transform 0.5s ease-in-out';
        
//             // Mover el slider automáticamente
//             setInterval(() => {
//                 if (currentIndex < slides.length - 1) {
//                     currentIndex++;
//                     slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
//                 } else {
//                     // Una vez que la última tarjeta ha sido mostrada, resetea al principio después de un breve retraso
//                     setTimeout(() => {
//                         slider.style.transition = 'none'; // Elimina la transición para que el cambio sea instantáneo
//                         currentIndex = 1; // Vuelve al inicio (justo después del clon inicial)
//                         slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
        
//                         // Forza un reflow para aplicar instantáneamente el cambio sin transición visible
//                         slider.offsetHeight;
        
//                         // Reactiva las transiciones para el próximo movimiento
//                         setTimeout(() => {
//                             slider.style.transition = 'transform 0.5s ease-in-out';
//                         });
//                     }, 300); // Espera medio segundo para que la última tarjeta sea visible por completo antes de resetear
//                 }
//             }, 3000);
// });

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

  // Intervalo para mover el carrusel cada 3 segundos
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


