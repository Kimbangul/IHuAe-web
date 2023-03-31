import { ReactNode } from 'react';
import Page from './PageWrapperStyle';
import NavContainer from '@/components/common/nav/NavContainer';

// COMPONENT
const PageWrapper: React.FC<PageWrapperPropsType> = ({ children, hideBottomTab }) => {
  return (
    <Page.Container className='Page'>
      <Page.Inner className='Page__inner'>{children}</Page.Inner>
      {
        hideBottomTab !== false &&
        <NavContainer />
      }
    </Page.Container>
  );
};

// PARAM type
interface PageWrapperPropsType {
  children: ReactNode;
  hideBottomTab?: false;
}


export default PageWrapper;
