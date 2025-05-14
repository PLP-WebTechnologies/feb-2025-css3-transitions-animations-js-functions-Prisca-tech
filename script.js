const button = document.getElementById('startBtn');
const box = document.getElementById('box');

// Function to trigger the animation
function triggerAnimation() {
  box.classList.remove('animate'); // Reset animation
  void box.offsetWidth;            // Reflow trick to restart animation
  box.classList.add('animate');

  // Store timestamp or flag in localStorage
  localStorage.setItem('lastAnimation', Date.now());
}

// Run animation on page load if needed
if (localStorage.getItem('lastAnimation')) {
  triggerAnimation();
}

// On button click
button.addEventListener('click', triggerAnimation);
