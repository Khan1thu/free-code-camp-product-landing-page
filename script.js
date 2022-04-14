const toggleButton = document.querySelector(".menu");
const nav = document.querySelector(".nav-link");

toggleButton.addEventListener("click", () => {
  nav.classList.toggle("nav-link-active");
});
