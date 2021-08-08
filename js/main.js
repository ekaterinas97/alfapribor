"use strict";

let btnMenu = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu-list');
let header = document.querySelector('.header');

btnMenu.addEventListener('click', function() {
    btnMenu.classList.toggle('open-menu');
    menu.classList.toggle('open-menu-list');
});

let submenuLi = document.querySelector('.menu__item-submenu');

let subMenu = document.querySelector('.submenu');
submenuLi.addEventListener('mouseover', function(event) {
    if (event.target === submenuLi) {
        submenuLi.classList.add('focus');
    }
});

// const swiperAnimation = new SwiperAnimation();
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    autoplay: false,
    loop: true,
    speed: 1000,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'custom',
        renderCustom: function(swiper, current, total) {
            let text = "<ul>";
            for (let i = 1; i <= total; i++) {
                if (current == i) {
                    text += `<li class="swiper-pagination-bullet active">${i}</li>`;
                } else {
                    text += `<li class="swiper-pagination-bullet">${i}</li>`;
                }
            }
            text += "</ul>";
            return text;
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function() {
            let captionTitles = document.querySelectorAll('.intro__title');
            let currentTitle = this.slides[this.activeIndex].querySelector('.intro__title');
            captionTitles.forEach(function(captionTitle) {
                captionTitle.classList.add('not-animated');
                if (captionTitle === currentTitle) {
                    captionTitle.classList.remove('not-animated');
                    captionTitle.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        },
    }

});


// for (let i = 0; i < swiper.slides.length; i++) {
//     console.log(swiper.slides[i]);
// }



// const titles = document.querySelectorAll('.intro__title[data-caption-animate]');
// console.log(titles);