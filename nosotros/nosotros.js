// // ROTAR LOS CONTENEDORES(VISION, MISI0N Y LOGROS)
// function girarContenedor(element) {
//     var frente = element.querySelector('.frente');
//     var reverso = element.querySelector('.reverso');

//     if (frente.style.transform === "rotateY(180deg)") {
//         frente.style.transform = "rotateY(0deg)";
//         reverso.style.transform = "rotateY(180deg)";
//     } else {
//         frente.style.transform = "rotateY(180deg)";
//         reverso.style.transform = "rotateY(0deg)";
//     }
// }

function girarContenedor(element) {
    element.classList.toggle('girado');
}
// FUNCION PARA ESCRIBIR EN LA PAGINA EL TEXTO.
const aboutText = "Con varios años de experiencia en el sector agrícola colombiano, somos líderes en soluciones agro sostenibles a nivel nacional e internacional. Nuestro portafolio incluye fertilizantes altamente capacitados. Con destacada instalada y talento humano, nos centramos en ofrecer el mejor paquete tecnológico para la nutrición de calidad en todos los cultivos.";
document.addEventListener('DOMContentLoaded', () => {
    const typedTextContainer = document.getElementById('typed-text');
    let index = 0;
    let typingSpeed = 8;
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
    }, { threshold: 0.3 });
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

