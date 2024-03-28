document.addEventListener('DOMContentLoaded', () => {
    // Eventos para abrir los popups
    document.querySelectorAll('.slide').forEach(slide => {
      slide.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        document.getElementById(target).style.display = 'flex';
      });
    });
  
    // Eventos para cerrar los popups
    document.querySelectorAll('.popup').forEach(popup => {
      popup.addEventListener('click', () => {
        popup.style.display = 'none';
      });
    });
  });

  
  