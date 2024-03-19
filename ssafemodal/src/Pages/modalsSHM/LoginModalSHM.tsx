import { NicknameConsumer } from "../contexts/NicknameContext";
import {
  ModalBlock,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalMain,
} from "./ModalSHM.element";
import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";

interface Modal {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginModalSHM: React.FC<Modal> = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  const handleOutsideClick = () => {
    setIsModalOpen(false);
  };
  const handleCompleteBtn = (actions: {
    setNickname: (newNickname: string) => void;
  }) => {
    navigate("/mySpace");
    actions.setNickname(nickname[0]);
  };
  const [nickname, changeNickname] = useInput();
  return (
    <>
      <ModalBlock onClick={handleOutsideClick}></ModalBlock>
      <Modal>
        <ModalHeader>
          <h2>닉네임을 입력하세요.</h2>
          <span>닉네임은 최소 4글자 이상이어야 합니다.</span>
        </ModalHeader>
        <ModalMain>
          <input onChange={changeNickname} />
        </ModalMain>
        <ModalFooter>
          <NicknameConsumer>
            {({ state, actions }) => {
              return (
                <button
                  onClick={() => handleCompleteBtn(actions)}
                  // onClick={() => {
                  //   actions.setNickname(nickname[0]);
                  // }}
                >
                  확인
                </button>
              );
            }}
          </NicknameConsumer>
        </ModalFooter>
      </Modal>
    </>
  );
};
