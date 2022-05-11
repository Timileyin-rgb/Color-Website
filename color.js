const menu = document.getElementById("mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const navLogo = document.getElementById('navbar-logo');

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling

const highlightMenu = () =>{
  const elem = document.querySelector('.highlight')
  const homeMenu = document.getElementById('home-page')
  const aboutMenu = document.getElementById('about-page')
  const servicesMenu = document.getElementById('services-page')
  let scrowllPos = window.scrollY;


if(window.innerWidth > 960 && scrowllPos < 600){
  homeMenu.classList.add('highlight')
  aboutMenu.classList.remove('highlight')
  return
}

else if(window.innerWidth > 960 && scrowllPos < 1400){
  aboutMenu.classList.add('highlight')
  homeMenu.classList.remove('highlight')
  servicesMenu.classList.remove('highlight')
  return
}

else if(window.innerWidth > 960 && scrowllPos < 2345){
  aboutMenu.classList.remove('highlight')
  servicesMenu.classList.add('highlight')
  return
}

if(elem && window.innerWidth < 960 && scrowllPos < 600 || elem){
  elem.classList.remove('highlight')
}
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () =>{
  const menuBars = document.querySelector('.is-active');
  if(window.innerWidth <= 960 && menuBars){
    menu.classList.toggle('is-active')
    menuLinks.classList.remove('active')
  }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);