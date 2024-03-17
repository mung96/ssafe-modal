import {
  ModalBlock,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalMain,
} from "./ModalSHM.element";

export const SurveyModalSHM = ({ setIsModalOpen }) => {
  const clickOutside = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ModalBlock onClick={clickOutside}></ModalBlock>
      <Modal>
        <ModalHeader>
          <h2>새로운 설문지를 작성합니다.</h2>
          <span>새로운 설문지를 작성하기 위한 설정입니다.</span>
        </ModalHeader>
        <ModalMain></ModalMain>
        <ModalFooter>
          <button>확인</button>
        </ModalFooter>
      </Modal>
    </>
  );
};
