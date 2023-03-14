import swiperOption from '../HomeSwiperOption';
import HomeContentView from '@/components/home/content/HomeContentView';

import cardAsset from '@/components/home/content/CardAsset';

const HomeContentContainer = () => {
  return <HomeContentView swiperOption={swiperOption} card={cardAsset} />;
};

export default HomeContentContainer;
