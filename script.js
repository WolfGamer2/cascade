// Handle loading screen
window.onload = function() {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.opacity = '0';
  loadingScreen.style.transition = 'opacity 0.5s ease-out';

  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 500); // Time matches the CSS transition duration
};

// Hack Club logo click to redirect
document.querySelector('.logo').onclick = function() {
  window.location.href = 'https://hackclub.com';
};
