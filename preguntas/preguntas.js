document.addEventListener('DOMContentLoaded', (e) => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const active = question.classList.contains('active');

            // Cierra todas las respuestas abiertas
            faqQuestions.forEach(item => {
                item.classList.remove('active');
                item.nextElementSibling.style.maxHeight = null;
            });

            // Si la pregunta no estaba activa, ábrela
            if (!active) {
                question.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});
