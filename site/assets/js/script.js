document.getElementById("year").textContent = new Date().getFullYear();

// Cloud hover "jump"
document.querySelectorAll("[data-cloud]").forEach((cloud) => {
  const hop = () => {
    cloud.classList.add("jump");
    window.setTimeout(() => cloud.classList.remove("jump"), 170);
  };
  cloud.addEventListener("mouseenter", hop);
  cloud.addEventListener("click", hop);
});

// Subtle parallax glow follows mouse
const g1 = document.querySelector(".g1");
const g2 = document.querySelector(".g2");

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;
  if (g1) g1.style.transform = `translate(${x * 18}px, ${y * 18}px)`;
  if (g2) g2.style.transform = `translate(${x * -22}px, ${y * -22}px)`;
});
