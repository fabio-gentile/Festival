const burger = document.querySelector('header .nav ul .nav-link .burger')
const nav = document.querySelector('header .nav')
const header = document.querySelector('header');
let open = false
const addOpacity = () => {
  nav.style.transition = 'opacity 0.3s ease-in-out'
  nav.style.opacity = 1
}
burger.addEventListener('click', (e) => {
  burger.classList.toggle("active")
  nav.classList.toggle("mobile")
  if(!open){
    open = true
  } else{
    open = false
  }
  // console.log(open)
  if(open){
    nav.style = ""
  } else{
    nav.style.opacity = 0
    setTimeout(addOpacity, 500)
  }
})
let lastPosition = window.scrollY;
window.addEventListener("scroll", () => {
  let currentPosition = window.scrollY;
  if (window.scrollY >= header.offsetHeight) {
    if (lastPosition < currentPosition) {
      header.style.top = `-${header.offsetHeight}vh`;
    } else {
      header.style.top = "0vh";
    }
    lastPosition = currentPosition;
  }
})