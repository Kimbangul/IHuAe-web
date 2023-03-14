import { SwiperProps } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';

const swiperOption: SwiperProps = {
  fadeEffect: {
    crossFade: true,
  },
  speed: 800,
  grabCursor: true,
  spaceBetween: 24,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  modules: [Autoplay, Pagination, Navigation, EffectFade],
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: true,
  },
  className: 'Card__slider',
};

export default swiperOption;
