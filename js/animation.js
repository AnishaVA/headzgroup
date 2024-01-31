const container = document.querySelector('.image-container');
const images = container.querySelectorAll('.image-item');

let currentImage = 0;

function animateImages() {
  images.forEach((image, index) => {
    if (index === currentImage) {
      image.style.opacity = 1;
      image.style.left = 0;
    } else {
      image.style.opacity = 0;
      image.style.left = '100%';
    }
  });

  images[currentImage].style.opacity = 0;
  images[currentImage].style.left = '100%';

  currentImage = (currentImage + 1) % images.length;

  images[currentImage].style.opacity = 1;
  images[currentImage].style.left = 0;

  setTimeout(animateImages, 3000); // Change the duration as needed
}

animateImages();
