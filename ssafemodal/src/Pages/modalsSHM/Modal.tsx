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
import { ReactNode } from "react";

interface ModalType {
  title: string;
  subTitle: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCompleteBtn: (actions: {
    setNickname: (newNickname: string) => void;
  }) => void;
  form: ReactNode;
}

export const Modal: React.FC<ModalType> = ({
  title,
  subTitle,
  setIsModalOpen,
  form,
  handleCompleteBtn,
}) => {
  const handleOutsideClick = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ModalBackground onClick={handleOutsideClick}></ModalBackground>
      <ModalBlock>
        <ModalHeader>
          <h2>{title}</h2>
          <span>{subTitle}</span>
        </ModalHeader>
        <ModalMain>{form}</ModalMain>
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
