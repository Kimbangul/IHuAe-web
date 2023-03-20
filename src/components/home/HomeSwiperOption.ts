import SwiperCore, { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import { SwiperRefType } from './content/HomeContentContainer';

export const swiperOption = (swiperRef: SwiperRefType) => {
  return {
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
      delay: 7000,
      pauseOnMouseEnter: true,
      disableOnInteraction: true,
    },
    className: 'Card__slider',
    onBeforeInit: (swiper: SwiperCore) => {
      swiperRef.current = swiper;
    },
  };
};

export default swiperOption;
