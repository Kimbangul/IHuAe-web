import { useDispatch, useSelector } from 'react-redux';
import { indexAction, RootStateType } from '@/redux';
import TodayFeelModalView from '@/components/common/modal/content/TodayFeelModalView';
import Header from './HomeHeaderStyle';

// COMPONENT
const HomeHeaderView = ({ feelText, feelStyle }: HomeHeaderViewPropsType) => {
  const dispatch = useDispatch();
  const rootState = useSelector((state: RootStateType) => state);

  return (
    <>
      <Header.Container className='Home__header'>
        <Header.Today.Container className='Home__today'>
          <Header.Today.Date className='Home__today-date'>D+4</Header.Today.Date>
          <Header.Today.Desc className='Home__today-desc'>
            {feelText} <Header.Today.Icon className='Home__today-icon' feelStyle={feelStyle}></Header.Today.Icon>
          </Header.Today.Desc>
        </Header.Today.Container>
        <Header.Qusetion.Container className='Home__qusetion'>
          <Header.Qusetion.Desc className='Home__question-desc'>요즘 가장 하고 싶은 게 뭐에요?</Header.Qusetion.Desc>
          <Header.Qusetion.Button
            className='Home__question-btn'
            onClick={() => {
              dispatch(
                indexAction.setModalContent(
                  <>
                    <TodayFeelModalView />
                  </>
                )
              );
            }}
          >
            기록하기
          </Header.Qusetion.Button>
        </Header.Qusetion.Container>
      </Header.Container>
    </>
  );
};

// PARAM type
interface HomeHeaderViewPropsType {
  feelText: string;
  feelStyle: null | string;
}

export default HomeHeaderView;
