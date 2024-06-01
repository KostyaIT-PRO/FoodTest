{
var swiper = new Swiper(".mySwiper", {
    swipe: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  });
}


{
  let classLink = '.hero-link';
window.onscroll = function() {
  let h = document.documentElement.clientHeight;
  if (window.scrollY >= h*4){
    classLink = '.footer-link';
  }
  else if (window.scrollY >= h*3){
    classLink = '.blog-link';
  }
  else if (window.scrollY >= h*2){
    classLink = '.recipes-link';
  }
  else if (window.scrollY >= h){
    classLink = '.teste-link';
  }
  else{
    classLink = '.hero-link';
  }
  let activeBtn = document.querySelector('.menu__linck-active');
  let newActiveBtn = document.querySelector(classLink);
  if (!newActiveBtn.classList.contains('menu__linck-active')){
    newActiveBtn.classList.add('menu__linck-active');
    activeBtn.classList.remove('menu__linck-active');
  }
};
}