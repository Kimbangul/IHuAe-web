import { useRef, MutableRefObject } from 'react';
import SwiperCore from 'swiper';

import swiperOption from '../HomeSwiperOption';
import HomeContentView from '@/components/home/content/HomeContentView';

import cardAsset from '@/components/home/content/CardAsset';

const HomeContentContainer = () => {
  const swiperRef = useRef<SwiperCore>();

  // FUNCTION navigation button click
  const onClickNavBtn = (direction: 'prev' | 'next') => {
    direction === 'prev' ? swiperRef.current?.slidePrev() : swiperRef.current?.slideNext();
  };

  return <HomeContentView swiperOption={swiperOption(swiperRef)} card={cardAsset} swiperRef={swiperRef} onClickNavBtn={onClickNavBtn} />;
};

// PARAM type
export type SwiperRefType = MutableRefObject<SwiperCore | undefined>;

export default HomeContentContainer;
