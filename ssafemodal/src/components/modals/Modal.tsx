import * as M from "./Modal.element";
import { ReactNode } from "react";
interface IModal {
  title: string;
  subtitle: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  form: ReactNode;
}

export const Modal: React.FC<IModal> = ({
  title,
  subtitle,
  setIsModalOpen,
  form,
}) => {
  return (
    <>
      <M.ModalBackground onClick={() => setIsModalOpen(false)} />
      <M.ModalBlock>
        <M.ModalHeader>
          <h2>{title}</h2>
          <span>{subtitle}</span>
        </M.ModalHeader>
        <M.ModalBody>{form}</M.ModalBody>
        <M.ModalFooter></M.ModalFooter>
      </M.ModalBlock>
    </>
  );
};
{/* <Dialog>
  <Dialog.Dimmed />
  <Dialog.Title>타이틀</Dialog.Title>
  <Dialog.CheckBox isChecked hasArrowButton>
    버튼명
  </Dialog.CheckBox>
  <Dialog.CheckBox hasArrowButton>버튼명</Dialog.CheckBox>
  <Dialog.CheckBox hasArrowButton>버튼명</Dialog.CheckBox>
  
  <Dialog.CheckBox hasArrowButton>버튼명</Dialog.CheckBox>
  <Dialog.CheckBox hasArrowButton>버튼명</Dialog.CheckBox>
  <Dialog.LabelButton>버튼레이블</Dialog.LabelButton>
</Dialog> */}