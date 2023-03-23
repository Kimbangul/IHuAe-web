import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import indexStore, { indexAction } from '@/redux';
import TodayFeelModalView from '@/components/common/modal/content/TodayFeelModalView';

// COMPONENT
const HomeHeaderView = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header.Container className='Home__header'>
        <Header.Today.Container className='Home__today'>
          <Header.Today.Date className='Home__today-date'>D+4</Header.Today.Date>
          <Header.Today.Desc className='Home__today-desc'>
            오늘의 기분을 표현해보세요 <Header.Today.Icon className='Home__today-icon'></Header.Today.Icon>
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

// COMPONENT style
const Header = {
  Container: styled.header`
    padding: 1.8rem 2rem 3rem 2rem;
    border-radius: 0 0 1.6rem 1.6rem;
    background: #fff;
    position: relative;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.14);
  `,
  Today: {
    Container: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    Date: styled.h1`
      color: ${({ theme }) => theme.color.main.main};
      font-size: 2.4rem;
    `,
    Desc: styled.div`
      display: flex;
      gap: 1.5rem;
      align-items: center;
      color: ${({ theme }) => theme.color.main.main};
      font-weight: 600;
      font-size: 1.2rem;
      cursor: pointer;
    `,
    Icon: styled.span`
      display: inline-block;
      border: 0.2rem dashed ${({ theme }) => theme.color.main.main};
      border-radius: 100%;
      width: 2.7rem;
      height: 2.7rem;
    `,
  },
  Qusetion: {
    Container: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 6.2rem;
    `,
    Desc: styled.p`
      color: ${({ theme }) => theme.color.main.main};
      font-size: 1.5rem;
      font-weight: 500;
    `,
    Button: styled.button`
      cursor: pointer;
      background: ${({ theme }) => theme.color.main.main};
      color: ${({ theme }) => theme.color.white};
      border-radius: 0.5rem;
      padding: 0.6rem 1.8rem;
      font-family: 'SpoqaHanSansNeo', sans-serif;
      box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.25);
      font-size: 1.2rem;
    `,
  },
};

export default HomeHeaderView;
