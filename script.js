window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  
  // Fade out the loading screen
  loadingScreen.style.transition = "opacity 0.5s ease";
  loadingScreen.style.opacity = "0";

  // Hide the loading screen after fade-out
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 500);
});

// Make logo clickable to redirect
const logo = document.querySelector('.logo');
logo.addEventListener('click', function () {
  window.location.href = "https://hackclub.com";
});
