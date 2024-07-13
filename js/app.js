$(document).ready(function() {
    $('#mainMenu').hcOffcanvasNav({
        disableAt: 961
    });
});
// desktop right sidebar
const desktopRightSidebar = document.querySelector('#desktopRightSidebar')
const desktopRightSidebarOpener = document.querySelector('#desktopRightSidebarOpener')
const rightSidebarCloseBtn = document.querySelector('#rightSidebarCloseBtn')
desktopRightSidebarOpener.addEventListener("click",() => {
    desktopRightSidebar.classList.add('open-right-sidebar')
})
rightSidebarCloseBtn.addEventListener("click",() => {
    desktopRightSidebar.classList.remove('open-right-sidebar')
})

//swiper slider codes
// heroSlider
{        const heroSlider = new Swiper('#heroSlider', {
// Navigation arrows
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
}
});
// heroSlider end
// heroSliderThumbs
const heroSliderThumbs = new Swiper ('#heroSliderThumbs', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: false,
    slideToClickedSlide: true,
});
heroSlider.controller.control = heroSliderThumbs;
heroSliderThumbs.controller.control = heroSlider;}
// heroSliderThumbs end
// foodItemsSlider
const foodItemsSlider = new Swiper("#foodItemsSlider",{
    slidesPerView: 2,
    spaceBetween:30,
    loop:true,
    grabCursor:true,
    navigation: {
    nextEl: '.food-slider-prev',
    prevEl: '.food-slider-next',
},
    breakpoints:{
    768:{
    slidesPerView:3
    },
    992:{
    slidesPerView:4
    },
    1200:{
    slidesPerView:5
    },
    1400:{
    slidesPerView:6
    },
    }
})