import { TodayFeelIconBaseType } from './TodayFeelIcon';

import FEEL01_37 from '@/assets/icons/home/feel01_37.svg';
import FEEL02_47 from '@/assets/icons/home/feel02_47.svg';
import FEEL03_24 from '@/assets/icons/home/feel03_24.svg';
import FEEL04_40 from '@/assets/icons/home/feel04_40.svg';
import FEEL05_36 from '@/assets/icons/home/feel05_36.svg';
import FEEL06_32 from '@/assets/icons/home/feel06_32.svg';

const todayFeelData: TodayFeelIconBaseType[] = [
  { icon: FEEL01_37(), name: '평온', width: '3.7rem', height: '3.85rem' },
  { icon: FEEL02_47(), name: '무덤덤', width: '3.7rem', height: '3.8rem' },
  { icon: FEEL03_24(), name: '슬픔', width: '2.4rem', height: '3.65rem' },
  { icon: FEEL04_40(), name: '분노', width: '3.8rem', height: '4rem' },
  { icon: FEEL05_36(), name: '만족', width: '3.6rem', height: '3.6rem' },
  { icon: FEEL06_32(), name: '공허함', width: '3.2rem', height: '3.2rem' },
];

export default todayFeelData;
