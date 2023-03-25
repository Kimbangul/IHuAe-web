import { MouseEventHandler, ReactNode } from 'react';
import indexStore, { RootStateType } from '@/redux';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { indexAction } from '@/redux';

const ModalView: React.FC = () => {
  const rootState = useSelector((state: RootStateType) => state);
  const dispatch = useDispatch();

  /** FUNCTION 기록하기 버튼 클릭 시 실행 */
  const setModalClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target !== e.currentTarget) return;
    dispatch(indexAction.setModalClose());
  };

  return (
    <>
      {rootState.ui.modal !== false && (
        <Modal.Section className='Modal' onClick={setModalClose}>
          <Modal.Container className='Modal__container'>{rootState.ui.modal}</Modal.Container>
        </Modal.Section>
      )}
    </>
  );
};

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
    ${({ theme }) => theme.animation.fadeIn({ name: 'modalFadeIn', duration: '0.2s' })};
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
