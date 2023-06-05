const menuOpen = document.querySelector("header nav ul li .burger");
const menuOpened = document.querySelector("header .menu .burger");
const burger = document.querySelector("header .menu");
menuOpen.addEventListener("click", () => {
  burger.classList.toggle("show");
});
menuOpened.addEventListener("click", () => {
  burger.classList.toggle("show");
});

const header = document.querySelector("header");
let lastPosition = window.scrollY;
window.addEventListener("scroll", () => {
  let currentPosition = window.scrollY;
  if (window.scrollY >= header.offsetHeight) {
    if (lastPosition < currentPosition) {
      header.style.top = `-${header.offsetHeight}px`;
    } else {
      header.style.top = "0px";
    }
    lastPosition = currentPosition;
  }
});
