import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HomeContentPropType, SlideNavigationBtnPropType } from './HomeContentType';
import { HomeContent,Card, NavBtn } from './HomeContentStyle';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import CHEVRON_8 from '@/assets/icons/home/chevron_8.svg';

// COMPONENT main component
const HomeContentView: React.FC<HomeContentPropType> = ({ swiperOption, card, onClickNavBtn }) => {
  return (
    <HomeContent.Container className='HomeContentView'>
      <SlideNavigationBtn direction='prev' onClickNavBtn={onClickNavBtn.bind(this, 'prev')} />
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
      <SlideNavigationBtn direction='next' onClickNavBtn={onClickNavBtn.bind(this, 'next')} />
    </HomeContent.Container>
  );
};

//  COMPONENT swiper navigation button
const SlideNavigationBtn: React.FC<SlideNavigationBtnPropType> = ({ direction, onClickNavBtn }) => {
  return (
    <NavBtn.Container
      direction={direction}
      onClick={() => {
        onClickNavBtn(direction);
      }}
    >
      <CHEVRON_8 />
    </NavBtn.Container>
  );
};

export default HomeContentView;
