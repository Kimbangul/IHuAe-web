import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HomeContentView: React.FC<HomeContentParamType> = ({ swiperOption }) => {
  return (
    <div className='HomeContentView'>
      <Swiper {...swiperOption}>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
      </Swiper>
    </div>
  );
};

// PARAM type
interface HomeContentParamType {
  swiperOption: SwiperProps;
}

export default HomeContentView;
