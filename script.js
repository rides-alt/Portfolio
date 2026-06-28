document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
let lastY = window.scrollY;

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  header.style.transform = y > lastY && y > 140 ? "translateY(-110%)" : "translateY(0)";
  lastY = y;
});
