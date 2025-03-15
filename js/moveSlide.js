let index = 0;
const slides = document.querySelector('.banner-slide');
const totalSlides = document.querySelectorAll('.banner-slide img').length;

function moveSlide(step) {
    index += step;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(() => moveSlide(1), 60000); // เลื่อนอัตโนมัติทุก 3 วินาที