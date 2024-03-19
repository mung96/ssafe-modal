import { NicknameConsumer } from "../contexts/NicknameContext";
import {
  ModalBlock,
  ModalBackground,
  ModalHeader,
  ModalFooter,
  ModalMain,
} from "./Modal.element";
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
      <ModalBackground onClick={handleOutsideClick}></ModalBackground>
      <ModalBlock>
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
                <button onClick={() => handleCompleteBtn(actions)}>확인</button>
              );
            }}
          </NicknameConsumer>
        </ModalFooter>
      </ModalBlock>
    </>
  );
};
