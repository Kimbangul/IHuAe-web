
import FEEL01_37 from '@/assets/icons/home/feel01_37.svg';
import FEEL02_47 from '@/assets/icons/home/feel02_47.svg';
import FEEL03_24 from '@/assets/icons/home/feel03_24.svg';
import FEEL04_40 from '@/assets/icons/home/feel04_40.svg';
import FEEL05_36 from '@/assets/icons/home/feel05_36.svg';
import FEEL06_32 from '@/assets/icons/home/feel06_32.svg';

const getFeelIcon = (iconName: getFeelIconParamType) => {

  const iconData = {
    '평온': {
      imgSrc: FEEL01_37(),
      size : {
        width: '3.7rem',
        height: '3.85rem',
      }
    },
    '무덤덤': {
      imgSrc: FEEL02_47(),
      size : {
        width: '3.7rem',
        height: '3.8rem',
      }
    },
    '슬픔': {
      imgSrc: FEEL03_24(),
      size : {
        width: '2.4rem',
        height: '3.65rem',
      }
    },
    '분노': {
      imgSrc: FEEL04_40(),
      size : {
        width: '3.8rem',
        height: '4rem',
      }
    },
    '만족': {
      imgSrc: FEEL05_36(),
      size : {
        width: '3.6rem',
        height: '3.6rem',
      }
    },
    '공허함': {
      imgSrc: FEEL06_32(),
      size : {
        width: '3.2rem',
        height: '3.2rem',
      }
    }
  };

  return iconData[iconName];
}

// param type
export type getFeelIconParamType = '평온' | '무덤덤' | '슬픔' | '분노' | '만족' | '공허함';

export default getFeelIcon;