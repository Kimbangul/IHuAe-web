import styled from 'styled-components';

// COMPONENT
const HomeHeaderView = () => {
  return (
    <>
      <Header.Container className='Home__header'>
        <Header.Today.Container className='Home__today'>
          <Header.Today.Date className='Home__today-date'>D+4</Header.Today.Date>
          <div className='Home__today-desc'>
            오늘의 기분을 표현해보세요 <span className='Home__today-icon'></span>
          </div>
        </Header.Today.Container>
        <div className='Home__qusetion'>
          <p className='Home__question-desc'>요즘 가장 하고 싶은 게 뭐에요?</p>
          <button className='Home__question-btn'>기록하기</button>
        </div>
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
    `,
  },
};

export default HomeHeaderView;
