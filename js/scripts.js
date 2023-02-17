const body = document.querySelector("body");
const hamburger = document.querySelector(".menu-open");

hamburger.addEventListener("click", () => {
  body.classList.toggle("open");
});
