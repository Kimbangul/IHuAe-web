import styled from 'styled-components';
import HomeHeaderView from './header/HomeHeaderView';
import HomeContentContainer from './content/HomeContentContainer';

const Home = () => {
  return (
    <HomeContainer className='Home'>
      <HomeHeaderView />
      <HomeContentContainer />
    </HomeContainer>
  );
};

// COMPONENT style
const HomeContainer = styled.section`
  height: 100%;
  background: ${({ theme }) => theme.color.bg.bg_01};
`;

export default Home;
