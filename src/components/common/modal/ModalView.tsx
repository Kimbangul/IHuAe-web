import { RootStateType } from '@/redux';
import { useSelector, useDispatch } from 'react-redux';
import { indexAction } from '@/redux';
import Modal from './ModalViewStyle';

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

export default ModalView;
