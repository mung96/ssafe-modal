import {
  ModalBlock,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalMain,
} from "./ModalSHM.element";

export const LoginModalSHM = ({ setIsModalOpen }) => {
  const clickOutside = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ModalBlock onClick={clickOutside}></ModalBlock>
      <Modal>
        <ModalHeader>
          <h2>닉네임을 입력하세요.</h2>
          <span>닉네임은 최소 4글자 이상이어야 합니다.</span>
        </ModalHeader>
        <ModalMain>
          <input />
        </ModalMain>
        <ModalFooter>
          <button>확인</button>
        </ModalFooter>
      </Modal>
    </>
  );
};
