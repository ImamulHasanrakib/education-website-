'use strict';

// navbar variables
const navbarNav = document.querySelector('.navbar_nav');
const navbarToggleBtn = document.querySelector('.nav_toggle_btn');

// navbar toggle functionality
navbarToggleBtn.addEventListener('click', function () {

  navbarNav.classList.toggle('active');
  this.classList.toggle('active');

});


// window scrolled related 

const navBar = document.querySelector('.navbar')

window.onscroll = function(){
  if(document.documentElement.scrollTop > 50){
    navBar.classList.add('header_scrolled');
    moveTop.classList.add('active');
  }
  else{
    navBar.classList.remove('header_scrolled');
    moveTop.classList.remove('active');
  }
}

// collapse  related 

const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach( link =>{
  link.addEventListener('click', ()=> {
    navbarNav.classList.remove('active');
    navbarToggleBtn.classList.remove('active');
  })
})

// swiper link 

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  loop:true,
  autoplay: true ,
  coverflowEffect: {
    rotate: 45,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },



});

// for second slide 

var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 40,
  autoplay:true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// move top 

const  home = document.querySelector('.home_wrapper');

const  moveTop = document.getElementById('scroll_top');

const scrollTop = function(){
  home.scrollIntoView(
       {behavior:"smooth"}
    );
}

moveTop.addEventListener('click', scrollTop);