import styled from 'styled-components';
import { ReactNode } from 'react';

import NavContainer from '@/components/common/nav/NavContainer';

// COMPONENT
const PageWrapper: React.FC<PageWrapperPropsType> = ({ children }) => {
  return (
    <Page.Container className='Page'>
      <Page.Inner className='Page__inner'>{children}</Page.Inner>
      <NavContainer />
    </Page.Container>
  );
};

// PARAM type
interface PageWrapperPropsType {
  children: ReactNode;
}

// COMPONENT style
const Page = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  `,
  Inner: styled.div`
    flex-grow: 1;
    overflow-y: scroll;
  `,
};

export default PageWrapper;
