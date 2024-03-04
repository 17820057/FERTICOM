// let currentRating = 0;

// document.querySelectorAll('.star-rating > span').forEach((star) => {
//     star.onclick = function () {
//         let stars = document.querySelectorAll('.star-rating > span');
//         stars.forEach((star) => { star.style.color = '#ccc'; });
//         this.style.color = 'gold';
//         let nextSibling = this.nextElementSibling;
//         while (nextSibling) {
//             nextSibling.style.color = 'gold';
//             nextSibling = nextSibling.nextElementSibling;
//         }
//         currentRating = this.getAttribute('data-value');
//     }
// });

// function submitTestimonial() {
//     const name = document.getElementById('name').value.trim();
//     const role = document.getElementById('role').value.trim();
//     const comment = document.getElementById('comment').value.trim();

//     if (name && role && comment && currentRating) {
//         const testimonials = document.getElementById('testimonials');
//         const testimonialCard = document.createElement('div');
//         testimonialCard.className = 'testimonial-card';
//         testimonialCard.innerHTML = `
//         <div class="dis_name">
//             <div class="name">${name}</div>
//             <div class="title">${role}</div>
//             <div div class="rating">${'&#9733;'.repeat(currentRating)}${'&#9734;'.repeat(5 - currentRating)}</div>
//         </div>
//         <div class="comment">${comment}</div>
//     `;
//         testimonials.appendChild(testimonialCard);
//         document.getElementById('name').value = '';
//         document.getElementById('role').value = '';
//         document.getElementById('comment').value = '';
//         currentRating = 0;
//         document.querySelectorAll('.star-rating > span').forEach((star) => { star.style.color = '#ccc'; });
//     } else {
//         alert('Por favor asegurese de llenar todos los campos.');
//     }
// }

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
        alert('Please fill out all fields and select a rating.');
    }
}

function updateSlides() {
    const testimonialsContainer = document.getElementById('testimonials');
    testimonialsContainer.innerHTML = ''; // Clear current testimonials
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

        currentSlideIndex = (currentSlideIndex + 1) % testimonials.length; // Cycle through testimonials
        const nextSlide = slides[currentSlideIndex];
        nextSlide.classList.add('show-slide');
    }, 6000); // Change slide every 6 seconds
}

// Call this function once to initialize the slideshow
startSlideShow();
