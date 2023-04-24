import { RootStateType } from '@/redux';
import { useSelector, useDispatch } from 'react-redux';
import { indexAction } from '@/redux';
import Modal from './ModalViewStyle';
import Alert from './AlertStyle';

const ModalView: React.FC = () => {
  const rootState = useSelector((state: RootStateType) => state);
  const dispatch = useDispatch();

  /** FUNCTION  모달창 바깥 클릭 시 닫기*/
  const setModalClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target !== e.currentTarget) return;
    dispatch(indexAction.setModalClose());
  };

  // FUNCTION alert창 바깥 클릭 시 닫기
  const setAlertClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target !== e.currentTarget) return;
    dispatch(indexAction.setModalClose());
  };

  return (
    <>
      {/* COMPONENT modal */}
      {rootState.ui.modal !== false && (
        <Modal.Section className='Modal' onClick={setModalClose}>
          <Modal.Container className='Modal__container'>{rootState.ui.modal}</Modal.Container>
        </Modal.Section>
      )}
      {/* COMPONENT alert */}
      {rootState.ui.alert !== false && (
        <Modal.Section className='Modal' onClick={setAlertClose}>
          <Alert.Container>{rootState.ui.alert}</Alert.Container>
        </Modal.Section>
      )}
    </>
  );
};

export default ModalView;
