// ROTAR LOS CONTENER¿DORES(VISION, MISI0N Y LOGROS)
function girarContenedor(element) {
    var frente = element.querySelector('.frente');
    var reverso = element.querySelector('.reverso');

    if (frente.style.transform === "rotateY(180deg)") {
        frente.style.transform = "rotateY(0deg)";
        reverso.style.transform = "rotateY(180deg)";
    } else {
        frente.style.transform = "rotateY(180deg)";
        reverso.style.transform = "rotateY(0deg)";
    }
}
function girarContenedor(element) {
    element.classList.toggle('girado');
}
// FUNCION PARA ESCRIBIR EN LA PAGINA EL TEXTO.
const aboutText = "Con varios años de experiencia en el sector agrícola colombiano, somos líderes en soluciones agro sostenibles a nivel nacional e internacional. Nuestro portafolio incluye fertilizantes altamente capacitados. Con destacada instalada y talento humano, nos centramos en ofrecer el mejor paquete tecnológico para la nutrición de calidad en todos los cultivos.";
document.addEventListener('DOMContentLoaded', function () {
    const typedTextContainer = document.getElementById('typed-text');
    let index = 0;

    function typeWriterEffect() {
        if (index < aboutText.length) {
            typedTextContainer.innerHTML += aboutText.charAt(index);
            index++;
            setTimeout(typeWriterEffect,8); 
        }
    }

    typeWriterEffect();
});
