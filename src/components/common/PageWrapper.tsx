import { ReactNode } from 'react';
import Page from './PageWrapperStyle';
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


export default PageWrapper;
