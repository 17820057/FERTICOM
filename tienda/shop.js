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

// carrito compra

function addToCart(name, type, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product;
  
    switch (type) {
      case 'oxilobac':
        product = {
          name: name,
          image: image,
          price: 20000,
          quantity: 1,
          measure: '100g',
          measures: [
            { measure: '100g', price: 20000 },
            { measure: '500g', price: 40000 },
            { measure: '1kg', price: 60000 }
          ]
        };
        break;
      case 'oxysil':
      case 'mix':
        product = {
          name: name,
          image: image,
          price: 50000,
          quantity: 1,
          measure: '10kg',
          measures: [
            { measure: '10kg', price: 50000 },
            { measure: '20kg', price: 100000 },
            { measure: '50kg', price: 200000 }
          ]
        };
        break;
      case 'pam':
      case 'ncalbor':
      case '19-7-4':
      case 'nacin':
        product = {
          name: name,
          image: image,
          price: 25000,
          quantity: 1,
          measure: '1L',
          measures: [
            { measure: '1L', price: 25000 },
            { measure: '4L', price: 50000 },
            { measure: '10L', price: 100000 }
          ]
        };
        break;
      default:
        return;
    }
  
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.open('carrito.html', '_blank') ;
  }
  