document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.relative');

  carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('.project-image');
    let currentImageIndex = 0;

    const showImage = index => {
      images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
      });
    };

    carousel.querySelector('.carousel-prev').addEventListener('click', () => {
      currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
      showImage(currentImageIndex);
    });

    carousel
