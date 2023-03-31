import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { indexAction, RootStateType } from '@/redux';

import { setTodayFeel, setTodayFeelDesc } from '@/redux/Content/action';
import TodayFeelIconContainer from './TodayFeelIcon';
import todayFeelData from './todayFeelData';

import CLOSE_17 from '@/assets/icons/home/close_17.svg';
import { setModalClose } from '@/redux/UI/action';
import Modal from './TodayFeelModalStyle';

const TodayFeelModalView = () => {
  const rootState = useSelector((state: RootStateType) => state);
  const dispatch = useDispatch();

  const [feel, setFeel] = useState('');
  const [feelDesc, setFeelDesc] = useState('');

  // FUNCTION 이미 제출된 데이터 불러오기
  useEffect(() => {
    if (rootState.content.todayFeel !== null) {
      setFeel(rootState.content.todayFeel);
    }
    if (rootState.content.todayFeelDesc !== '') {
      setFeelDesc(rootState.content.todayFeelDesc);
    }
  }, []);

  // FUNCTION 제출버튼 선택 시
  const onSubmit = () => {
    if ([feel, feelDesc].includes('')) {
      alert('입력되지 않은 값이 존재합니다.');
      return;
    }
    dispatch(setTodayFeel(feel));
    dispatch(setTodayFeelDesc(feelDesc));
    dispatch(setModalClose());
  };

  return (
    <div className='Modal__inner'>
      <Modal.Close.Btn
        className='Modal__close-btn'
        onClick={() => {
          dispatch(indexAction.setModalClose());
        }}
      >
        <CLOSE_17 />
      </Modal.Close.Btn>
      <Modal.Text>오늘은 어떤 기분이 드나요?</Modal.Text>
      <Modal.List.Container>
        <TodayFeelIconContainer todayFeel={feel} setTodayFeel={setFeel} list={todayFeelData()} />
      </Modal.List.Container>
      <Modal.Input type='text' placeholder='추가로 느끼는 감정을 작성해보세요' value={feelDesc} onChange={(e) => setFeelDesc(e.target.value)} />
      <Modal.Button onClick={onSubmit}>선택 완료</Modal.Button>
    </div>
  );
};

// PARAM type
interface FeelItemPropType {
  title: string;
  img: string;
}

export default TodayFeelModalView;
