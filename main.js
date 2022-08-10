const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll(".navIcon");
const hamberger = document.querySelector('#hamberger');
navToggle.addEventListener("click", () => {
   nav.classList.toggle('open'); // nav will assign class name as open in html and retrive the css code which is writen at inistial in style.css file
   navIcon.forEach(icon => {
      icon.classList.toggle('hidden');
   });
});

window.addEventListener("resize", () => {
   if(document.body.clientWidth > 720){
      nav.classList.remove("open");
      navIcon.forEach(icon => {
         icon.classList.add('hidden')
      });
      hamberger.classList.remove('hidden');
   }  
});