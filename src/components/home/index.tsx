import styled from 'styled-components';
import HomeHeaderView from './header/HomeHeaderView';

const Home = () => {
  return (
    <HomeContainer className='Home'>
      <HomeHeaderView />
      content
    </HomeContainer>
  );
};

// COMPONENT style
const HomeContainer = styled.section`
  height: 100%;
  background: ${({ theme }) => theme.color.bg.bg_01};
`;

export default Home;
