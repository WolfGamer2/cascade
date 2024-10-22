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
    header.style.marginTop = nav.classList.contains("open") ? "285px" : "85px";
  });

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
      if (window.innerWidth <= 600) {
        nav.classList.remove("open");
        navToggle.innerHTML = "☰";
        header.style.marginTop = "85px";
      }
    });
  });

  // THREE.JS SETUP
  const canvas = document.getElementById('webgl-canvas');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create a gradient background
  const gradientTexture = new THREE.TextureLoader().load('path/to/your/gradient-image.jpg'); // Replace with your gradient
  const backgroundMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 200),
      new THREE.MeshBasicMaterial({ map: gradientTexture })
  );
  backgroundMesh.position.z = -50;
  scene.add(backgroundMesh);

  camera.position.z = 5;

  let isDrawing = false;
  const points = [];
  const material = new THREE.LineBasicMaterial({ color: 0xff7eb3, linewidth: 3 });
  const geometry = new THREE.BufferGeometry();

  function onMouseMove(event) {
      if (!isDrawing) return;

      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      points.push(new THREE.Vector3(x, y, 0));
      geometry.setFromPoints(points);

      const line = new THREE.Line(geometry, material);
      scene.add(line);
  }

  const marker = document.getElementById('marker');

document.addEventListener('mousemove', (event) => {
    marker.style.left = `${event.clientX}px`;
    marker.style.top = `${event.clientY}px`;
    marker.style.display = isDrawing ? 'block' : 'none';
});


  document.addEventListener('mousedown', () => {
      isDrawing = true;
      points.length = 0; // Clear previous points
      geometry.setFromPoints(points); // Initialize geometry
  });

  document.addEventListener('mouseup', () => {
      isDrawing = false;
      points.length = 0; // Clear points when mouse up
  });

  document.addEventListener('mousemove', onMouseMove);

  function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
  }
  animate();

  // Handle window resize
  window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  });
});
