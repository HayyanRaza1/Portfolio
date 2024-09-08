document.addEventListener("DOMContentLoaded", () => {
  const backgroundGrid = document.querySelector(".background-grid");
  const gridSize = 80; // Grid size should match the background-size in CSS

  function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Align particle to a grid cell
    const gridX =
      Math.floor(Math.random() * (window.innerWidth / gridSize)) * gridSize;
    const gridY = -gridSize; // Start above the viewport
    particle.style.left = `${gridX}px`; // Align horizontally
    particle.style.top = `${gridY}px`; // Start above the viewport

    backgroundGrid.appendChild(particle);

    // Set animation properties
    const duration = Math.random() * 5 + 5; // Random duration between 5s and 10s
    particle.style.transition = `top ${duration}s linear`;

    // Trigger the animation
    requestAnimationFrame(() => {
      particle.style.top = `${window.innerHeight}px`; // Move to bottom of the viewport
    });

    // Remove particle after animation
    setTimeout(() => {
      particle.remove();
    }, duration * 1000);
  }

  // Generate one particle at a time
  function startParticleAnimation() {
    createParticle();
    setTimeout(startParticleAnimation, 2000); // Adjust interval as needed
  }

  startParticleAnimation();
});

function toggleMenu() {
  const menuPanel = document.querySelector(".menu-panel");
  menuPanel.classList.toggle("open");
}
