// Initialize the carousel
const thumbnails = document.querySelectorAll('.thumbnail .items');
const carouselItems = document.querySelectorAll('.carousel .list .item');

// Function to animate the active carousel item's content
function animateCarouselContent(index) {
  // Hide all carousel items and reset content animations
  carouselItems.forEach((item) => {
    item.style.opacity = 0;
    item.style.visibility = 'hidden';

    const animatedElements = item.querySelectorAll('.Name1, .Name2, .des, .buttons');
    animatedElements.forEach((el) => {
      el.style.animation = 'none'; // Reset any existing animation
    });
  });

  // Show the active carousel item
  const activeItem = carouselItems[index];
  activeItem.style.opacity = 1;
  activeItem.style.visibility = 'visible';

  // Trigger animations
  const animatedElements = activeItem.querySelectorAll('.Name1, .Name2, .des, .buttons');
  animatedElements.forEach((el, animationIndex) => {
    // animation delay for each element
    el.style.animation = `showContent 0.5s ${animationIndex * 0.2}s linear forwards`;
  });
}

//Event listeners to thumbnails
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    // Remove 'active' class from all thumbnails
    thumbnails.forEach((item) => item.classList.remove('active'));

    // Add 'active' class to the clicked thumbnail
    thumbnail.classList.add('active');

    // Animate the corresponding carousel content
    animateCarouselContent(index);
  });
});

// Set the first thumbnail and carousel item as active initially
thumbnails[0].classList.add('active');
animateCarouselContent(0);



