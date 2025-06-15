const mosqueButton = document.getElementById('mosque-button');

mosqueButton.addEventListener('click', () => {
  mosqueButton.classList.add('clicked');

  // Remove the class after the animation completes
  setTimeout(() => {
    mosqueButton.classList.remove('clicked');
  }, 500); // Corresponds to the animation duration in CSS
});
