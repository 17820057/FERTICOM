// FUNCION PARA GIRAR LOS CONTENEDORES.
document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll('.container');

    containers.forEach(function(container) {
        container.addEventListener('mouseenter', function() {
            this.querySelector('.carafrente').style.transform = "rotateY(-180deg)";
            this.querySelector('.carareverso').style.transform = "rotateY(0deg)";
        });

        container.addEventListener('mouseleave', function() {
            this.querySelector('.carafrente').style.transform = "rotateY(0deg)";
            this.querySelector('.carareverso').style.transform = "rotateY(180deg)";
        });
    });
});

// FUNCION PARA ESCRIBIR EN LA PAGINA EL TEXTO.
const aboutText = "Con varios años de experiencia en el sector agrícola colombiano, somos líderes en soluciones agro sostenibles a nivel nacional e internacional. Nuestro portafolio incluye fertilizantes altamente capacitados. Con destacada instalada y talento humano, nos centramos en ofrecer el mejor paquete tecnológico para la nutrición de calidad en todos los cultivos.";
document.addEventListener('DOMContentLoaded', () => {
    const typedTextContainer = document.getElementById('typed-text');
    let index = 0;
    let typingSpeed = 7;
    // Reinicia y ejecuta el efecto de máquina de escribir
    function resetAndTypeWriterEffect() {
        typedTextContainer.innerHTML = ''; 
        index = 0; 
        typeWriterEffect();
    }
    // Función que ejecuta el efecto de máquina de escribir
    function typeWriterEffect() {
        if (index < aboutText.length) {
            typedTextContainer.innerHTML += aboutText.charAt(index);
            index++;
            setTimeout(typeWriterEffect, typingSpeed);
        }
    }
    // Crea una instancia de IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resetAndTypeWriterEffect();
            }
        });
    }, { threshold: 0.9 });
    observer.observe(typedTextContainer);
});



// ANIMACION IMAGEN AL LADO DE LA HISTORIA
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('start-animation');
            } else {
                entry.target.classList.remove('start-animation');
            }
        });
    }, { threshold: 0.3});

    const imageContainer = document.querySelector('.slide-in-out');
    observer.observe(imageContainer);
});

