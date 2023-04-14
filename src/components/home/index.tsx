import styled from 'styled-components';
import HomeHeaderContainer from './header/HomeHeaderContainer';
import HomeContentContainer from './content/HomeContentContainer';

const Home = () => {
  return (
    <HomeContainer className='Home'>
      <HomeHeaderContainer />
      <HomeContentContainer />
    </HomeContainer>
  );
};

// COMPONENT style
const HomeContainer = styled.section`
  background: ${({ theme }) => theme.color.bg.bg_01};
  height: 100%;
`;

export default Home;
