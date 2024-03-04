let currentRating = 0;
let testimonials = [];
let currentSlideIndex = 0;
let slideInterval;

document.querySelectorAll('.star-rating > span').forEach(star => {
    star.onclick = function () {
        let stars = document.querySelectorAll('.star-rating > span');
        stars.forEach(star => { star.style.color = '#ccc'; });
        this.style.color = 'gold';
        let nextSibling = this.nextElementSibling;
        while (nextSibling) {
            nextSibling.style.color = 'gold';
            nextSibling = nextSibling.nextElementSibling;
        }
        currentRating = this.getAttribute('data-value');
    }
});

function submitTestimonial() {
    const name = document.getElementById('name').value.trim();
    const role = document.getElementById('role').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (name && role && comment && currentRating) {
        testimonials.push({
            name: name,
            role: role,
            rating: currentRating,
            comment: comment
        });

        updateSlides();
        startSlideShow();

        document.getElementById('name').value = '';
        document.getElementById('role').value = '';
        document.getElementById('comment').value = '';
        currentRating = 0;
        document.querySelectorAll('.star-rating > span').forEach(star => { star.style.color = '#ccc'; });
    } else {
        alert('Por favor asegurate de llenar todos loss campos.');
    }
}

function updateSlides() {
    const testimonialsContainer = document.getElementById('testimonials');
    testimonialsContainer.innerHTML = ''; 
    testimonials.forEach((testimonial, index) => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = `testimonial-slide ${index === 0 ? 'show-slide' : ''}`;
        testimonialDiv.innerHTML = `
        <div class="name">${testimonial.name}</div>
        <div class="title">${testimonial.role}</div>
        <div class="rating">${'&#9733;'.repeat(testimonial.rating)}${'&#9734;'.repeat(5 - testimonial.rating)}</div>
        <div class="comment">${testimonial.comment}</div>
    `;
        testimonialsContainer.appendChild(testimonialDiv);
    });
}

function startSlideShow() {
    if (slideInterval) clearInterval(slideInterval);

    slideInterval = setInterval(() => {
        const slides = document.querySelectorAll('.testimonial-slide');
        const currentSlide = slides[currentSlideIndex];
        currentSlide.classList.remove('show-slide');

        currentSlideIndex = (currentSlideIndex + 1) % testimonials.length; 
        const nextSlide = slides[currentSlideIndex];
        nextSlide.classList.add('show-slide');
    }, 4500); 
}


startSlideShow();
