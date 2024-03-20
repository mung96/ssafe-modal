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
  subtitle: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

  form?: ReactNode;
}

export const Modal: React.FC<ModalType> = ({
  title,
  subtitle,
  setIsModalOpen,
  form,
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
          <span>{subtitle}</span>
        </ModalHeader>
        <ModalMain>{form}</ModalMain>
        <ModalFooter>
        </ModalFooter>
      </ModalBlock>
    </>
  );
};
