import getFeelIcon, {getFeelIconParamType} from '@/utils/getFeelIcon';
import { TodayFeelIconBaseType } from './TodayFeelIcon';


const feelArr : getFeelIconParamType[] = ['평온','무덤덤','슬픔','분노','만족','공허함'];

const todayFeelData: () => TodayFeelIconBaseType[] = () => {
  const data = feelArr.map(el => {
    return {
      icon: getFeelIcon(el).imgSrc,
      name: el,
      width: getFeelIcon(el).size.width,
      height: getFeelIcon(el).size.height
    }
  });

  return data;
}

export default todayFeelData;
