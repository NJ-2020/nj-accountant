// Navbar
const menu = document.querySelector('#mobile-menu');
const body = document.querySelector('#body');
const menulinks = document.querySelector('.nav-menu');
const menuLi = document.querySelectorAll('.nav-menu li');
menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  body.classList.toggle('blur');
  menulinks.classList.toggle('active');
});

menuLi.forEach((li) => {
  li.addEventListener("click", () => {
    menu.classList.remove('is-active');
    body.classList.remove('blur');
    menulinks.classList.remove('active');
  })
})