$(document).ready(function(){

  /* For Navigation Bar Convertion */
    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
    });
  
  
    $('.accordion-header').click(function(){
      $('.accordion .accordion-body').slideUp();
      $(this).next('.accordion-body').slideDown();
      $('.accordion .accordion-header span').text('+');
      $(this).children('span').text('-');
    });
  
  });


  /* For Login and Resister form Convertion */
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink= document.querySelector('.register-link');

registerLink.addEventListener('click', () => { wrapper.classList.remove('active');});

loginLink.addEventListener('click', () => { wrapper.classList.add('active');});
