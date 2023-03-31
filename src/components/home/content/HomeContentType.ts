import SwiperCore from 'swiper';
import { SwiperProps } from 'swiper/react';
import { MouseEventHandler, MutableRefObject } from 'react';
import { StaticImageData } from 'next/image';

export type OnClickNabBtnType<T> = (direction: 'prev' | 'next') => T;
export type DirectionType = 'prev' | 'next';

export interface HomeContentPropType {
  swiperOption: SwiperProps;
  card: StaticImageData[];
  swiperRef: MutableRefObject<SwiperCore | undefined>;
  onClickNavBtn: OnClickNabBtnType<void>;
}
export interface SlideNavigationBtnPropType {
  direction: DirectionType;
  onClickNavBtn: OnClickNabBtnType<void> & MouseEventHandler;
}