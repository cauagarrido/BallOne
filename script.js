
document.addEventListener('DOMContentLoaded', function () {
    const slidesContainer = document.querySelector('.carousel-slides');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
        slidesContainer.style.transform = 'translateX(' + (-index * 100) + '%)';
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        goToSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        goToSlide(currentIndex);
    });

    // Opcional: transição automática a cada 5 segundos
    setInterval(() => {
        nextButton.click();
    }, 8000);
});

// Funções do rodapé
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
function openWhatsApp(number) {
    window.open('https://wa.me/' + number, '_blank');
}
