import { useInput } from "../../hooks/useInput";
import * as M from "./Modal.element";
import { MODAL_TEXT, ModalType } from "./ModalConstants";

interface Props {
  type: ModalType;
  closeModal: () => void;
  confirm: { title: string; onClick: () => void };
  cancel?: { title: string; onClick: () => void };
}

export const Modalv2 = ({ type, closeModal, confirm, cancel }: Props) => {
  const modalType = MODAL_TEXT[type];
  const handleBackgroundClick = () => {
    closeModal();
  };
  const nickname = useInput();
  return (
    <>
      <M.ModalBackground onClick={handleBackgroundClick}></M.ModalBackground>
      <M.ModalBlock>
        <M.ModalHeader>
          <h2>{modalType.title}</h2>
          <span>{modalType.subtitle}</span>
        </M.ModalHeader>
        <M.ModalBody>
          <input
            onChange={nickname.handleChange}
            maxLength={10}
            minLength={4}
          />
        </M.ModalBody>
        <M.ModalFooter>
          {cancel && (
            <M.CancelButton onClick={cancel.onClick}>
              {cancel.title}
            </M.CancelButton>
          )}
          <M.CompleteButton
            onClick={confirm.onClick}
            disabled={nickname.value.length < 4}
          >
            {confirm.title}
          </M.CompleteButton>
        </M.ModalFooter>
      </M.ModalBlock>
    </>
  );
};
