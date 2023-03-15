import { ReactNode } from 'react';
import styled from 'styled-components';

const ModalView: React.FC<ModalViewPropType> = ({ children }) => {
  return (
    <Modal.Section className='Modal'>
      <Modal.Container className='Modal__container'>{children}</Modal.Container>
    </Modal.Section>
  );
};

// PARAM type
interface ModalViewPropType {
  children: ReactNode;
}

// COMPONENT style
const Modal = {
  Section: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.63);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
  `,
  Container: styled.div`
    padding: 1.8rem 2rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.color.white};
    width: 88%;
    max-width: 64rem;
  `,
};

export default ModalView;
