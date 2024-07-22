"use strict";

const burgerBtn = document.querySelector('.burger-menu');
burgerBtn.addEventListener('click', () =>{
    document.body.classList.toggle('burger-open');
    document.body.classList.toggle('_lock');
});

const menuBtns = document.querySelectorAll('.menu-header__link');
menuBtns.forEach((btn)=>{
    const subMenu = btn.nextElementSibling;
    if(!subMenu){
        return;
    }
    btn.addEventListener('click',()=>{
        btn.classList.toggle('active');
        const panel = btn.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
})

const acc = document.querySelectorAll(".column-top-footer__title");


for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const company = ['tonkean','bigSpring','clearbit','mine','shake'];
new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.testimonial__pagination',
      clickable:true,
      bulletClass:"testimonial__item",
      bulletActiveClass:"active",
      renderBullet: function (index, className) {
        return '<span class="' + className + '"><svg><use xlink:href="img/sprite.svg#'+company[index]+'"></use></svg></span>';
    },
    },
    
})

// google sign up
// function onSuccess(googleUser) {
//     console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
//   }
//   function onFailure(error) {
//     console.log(error);
//   }
//   function renderButton() {
//     gapi.signin2.render('my-signin2', {
//       'scope': 'profile email',
//       'width': 240,
//       'height': 50,
//       'longtitle': true,
//       'theme': 'dark',
//       'onsuccess': onSuccess,
//       'onfailure': onFailure
//     });
//   }