// Menu
const menu = document.querySelector(".navbar__links");
const menuBtn = document.querySelector(".navbar__icons");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuBtn.classList.toggle("open");
});
