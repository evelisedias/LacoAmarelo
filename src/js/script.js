document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    const showSlides = () => {
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? 'block' : 'none';
        });
    };

    const nextSlide = () => {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlides();
    };

    const prevSlide = () => {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlides();
    };

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Exibição inicial
    showSlides();

    // Passagem automática
    setInterval(nextSlide, 3000);
});