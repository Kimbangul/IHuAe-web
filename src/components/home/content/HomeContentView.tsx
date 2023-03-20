import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import styled, { css } from 'styled-components';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import CHEVRON_8 from '@/assets/icons/home/chevron_8.svg';

// COMPONENT main component
const HomeContentView: React.FC<HomeContentPropType> = ({ swiperOption, card }) => {
  return (
    <HomeContent.Container className='HomeContentView'>
      <SlideNavigationBtn direction='left' />
      <Swiper {...swiperOption}>
        {card.map((el, idx) => {
          return (
            <SwiperSlide key={`card${idx}`}>
              <Card.Container>
                <Image src={el.src} alt='' fill />
              </Card.Container>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SlideNavigationBtn direction='right' />
    </HomeContent.Container>
  );
};

//  COMPONENT swiper navigation button
const SlideNavigationBtn: React.FC<SlideNavigationBtnPropType> = ({ direction }) => {
  return (
    <NavBtn.Container direction={direction}>
      <CHEVRON_8 />
    </NavBtn.Container>
  );
};

// PARAM type
interface HomeContentPropType {
  swiperOption: SwiperProps;
  card: StaticImageData[];
}
interface SlideNavigationBtnPropType {
  direction: 'left' | 'right';
}

// COMPONENT style
const HomeContent = {
  Container: styled.div`
    padding: 2.4rem 3.2rem;
    position: relative;
  `,
};
const Card = {
  Container: styled.div`
    width: 100%;
    position: relative;

    span {
      position: unset !important;
    }

    img {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  `,
};
const NavBtn = {
  Container: styled.button<SlideNavigationBtnPropType>`
    position: absolute;
    top: 50%;
    left: 0.9rem;
    transform: translateY(-50%);

    ${({ direction }) =>
      direction === 'left'
        ? null
        : css`
            left: unset;
            right: 0.9rem;
            transform: translateY(-50%) rotate(180deg);
          `};
  `,
};

export default HomeContentView;
