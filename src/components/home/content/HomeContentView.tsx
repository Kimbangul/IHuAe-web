import Image from 'next/image';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { StaticImageData } from 'next/image';

const HomeContentView: React.FC<HomeContentParamType> = ({ swiperOption, card }) => {
  return (
    <HomeContent.Container className='HomeContentView'>
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
    </HomeContent.Container>
  );
};

// PARAM type
interface HomeContentParamType {
  swiperOption: SwiperProps;
  card: StaticImageData[];
}

// COMPONENT style
const HomeContent = {
  Container: styled.div`
    padding: 2.4rem 3.2rem;
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

export default HomeContentView;
