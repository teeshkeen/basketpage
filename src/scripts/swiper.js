const swiper = new Swiper('.swiper', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: false,
  });

  const buttons = document.querySelectorAll('.custom-pagination__button');
  buttons.forEach(button => {
    const slideIndex = parseInt(button.getAttribute('data-slide'));
    button.addEventListener('click', function () {
      swiper.slideTo(slideIndex);
    });

    button.addEventListener('mouseenter', function () {
      swiper.slideTo(slideIndex);
    });
  });

  swiper.on('slideChange', function () {
    buttons.forEach(button => {
      button.classList.remove('button-active');
    });
    const activeIndex = swiper.activeIndex;
    buttons[activeIndex].classList.add('button-active');
  });

  buttons[swiper.activeIndex].classList.add('button-active');