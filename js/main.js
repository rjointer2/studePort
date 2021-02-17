/* CSS VARIABLES */ 
const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')

/* SHOW */ 
toggleMenu.addEventListener('click', ()=>{
  navMenu.classList.toggle('show')
})

/* DEACTIVE NAV */
closeMenu.addEventListener('click', ()=>{
  navMenu.classList.remove('show')
})

/* REMOVE AND ACTIVE NAV */
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /* TOGGLE ACTIVE CLASS TAG */
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /* REMOVE MENU  */
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));