document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const navToggle = document.createElement("button");
  const header = document.querySelector("header");

  navToggle.classList.add("nav-toggle");
  navToggle.innerHTML = "☰";
  nav.insertBefore(navToggle, nav.firstChild);

  navToggle.addEventListener("click", function () {
    nav.classList.toggle("open");
    navToggle.innerHTML = nav.classList.contains("open") ? "✕" : "☰";
    if (nav.classList.contains("open")) {
      navToggle.classList.add("rotate");
      header.style.marginTop = "285px";
    } else {
      navToggle.classList.remove("rotate");
      header.style.marginTop = "85px";
    }
  });

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      if (window.innerWidth <= 600) {
        nav.classList.remove("open");
        navToggle.innerHTML = "☰";
        header.style.marginTop = "85px";
      }
    });
  });

  new cursoreffects.springyEmojiCursor({ emoji: "🤷‍♂️" });
});
let currentIndex = 0;

function moveCarousel(direction) {
  const items = document.querySelectorAll(".carousel-item");

  items[currentIndex].classList.remove("active");

  currentIndex = (currentIndex + direction + items.length) % items.length;

  items[currentIndex].classList.add("active");
}