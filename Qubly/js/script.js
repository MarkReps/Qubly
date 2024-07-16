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