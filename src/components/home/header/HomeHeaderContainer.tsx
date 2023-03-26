import { useEffect, useState } from 'react';
import { RootStateType } from '@/redux';
import { useSelector } from 'react-redux';
import HomeHeaderView from './HomeHeaderView';
import theme from '@/assets/style/Theme';

const HomeHeaderContainer = () => {
  const rootState = useSelector((state: RootStateType) => state);
  const [feelState, setFeelState] = useState('오늘의 기분을 표현해보세요');
  const [feelStyle, setFeelStyle] = useState<null | string>(null);

  // FUNCTION 오늘의 기분 문구
  useEffect(() => {
    switch (rootState.content.todayFeel) {
      case '':
      case null:
        setFeelState('오늘의 기분을 표현해보세요');
        setFeelStyle(`border: 0.2rem dashed ${theme.color.main.main}`);
        break;
      case '평온':
        setFeelState('오늘의 기분은 평온해요');
        setFeelStyle(`background: #FAD556`);
        break;
      case '무덤덤':
        setFeelState('오늘의 기분은 무덤덤해요');
        setFeelStyle(`background: #7C6CBB`);
        break;
      case '슬픔':
        setFeelState('오늘의 기분은 슬퍼요');
        setFeelStyle(`background: #AED1E4`);
        break;
      case '분노':
        setFeelState('오늘의 기분은 화나요');
        setFeelStyle(`background: #FF6060`);
        break;
      case '만족':
        setFeelState('오늘의 기분은 만족스러워요');
        setFeelStyle(`background: #A3E4A1`);
        break;
      case '공허함':
        setFeelState('오늘의 기분은 공허해요');
        setFeelStyle(`border: 0.2rem dashed ${theme.color.main.main}`);
        break;
    }
  }, [rootState.content.todayFeel]);

  return <HomeHeaderView feelText={feelState} feelStyle={feelStyle} />;
};

export default HomeHeaderContainer;
