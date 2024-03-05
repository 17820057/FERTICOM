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


document.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('scroll', () => {
        const element = document.querySelector('.slide-in');
        const position = element.getBoundingClientRect();
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.style.animation = 'slide-in 1s forwards';
        }
    });
});