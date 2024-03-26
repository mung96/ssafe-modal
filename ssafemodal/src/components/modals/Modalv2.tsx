import { useModal } from "../../hooks/useModal";
import * as M from "./Modal.element";
import { MODAL_TEXT, ModalType } from "./ModalConstants";

interface Props{
    type:ModalType;
}

export const Modalv2 = (
    {type}:Props
) =>{
    const {closeModal} = useModal();
    const modalType=MODAL_TEXT[type];
    return<> 
    <M.ModalBackground onClick={()=>closeModal()}></M.ModalBackground>
    <M.ModalBlock>
        <M.ModalHeader>
         <h2>{modalType.title}</h2>
          <span>{modalType.subtitle}</span>
        </M.ModalHeader>
        <M.ModalBody>
            

        </M.ModalBody>
        <M.ModalFooter>
            {'cancel' in modalType&& <M.CancelButton>{modalType.cancel}</M.CancelButton>}
            <M.CompleteButton>{modalType.confirm}</M.CompleteButton>
        </M.ModalFooter>
    </M.ModalBlock>
    </>
}