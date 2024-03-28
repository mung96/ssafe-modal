import {
  createContext,
  useState,
  ComponentType,
  HTMLAttributes,
  PropsWithChildren,
  useMemo,
} from "react";
import { IModal } from "../components/modals/Modal";

//ComponentType말고 IModal로 바꿔보자.
export type ModalComponent = ComponentType<any>;
export type ModalProps = Record<string, any> | HTMLAttributes<HTMLDivElement>;

export type ModalState = {
  Component: ModalComponent;
  props?: ModalProps;
  isOpen: boolean;
};

type ModalsDispatch = {
  open: (Component: ModalComponent, props: ModalProps) => void;
  close: (Component: ModalComponent) => void;
};

//현재 open된 modal들을 나타냄
export const ModalsStateContext = createContext<ModalState[]>([]);

//modal을 열고 닫는 함수
export const ModalsDispatchContext = createContext<ModalsDispatch>({
  open: () => {},
  close: () => {},
});

const ModalsProvider = ({ children }: PropsWithChildren) => {
  const [openedModals, setOpenedModals] = useState<ModalState[]>([]);
  //매개변수로 받은 컴포넌트를 열어
  const open = (Component: ModalComponent, props: ModalProps) => {
    setOpenedModals((modals) => {
      const modalIndex = modals.findIndex(
        (modal) => modal.Component === Component
      );

      if (modalIndex !== -1) {
        //모달이 이미 배열에 있는 경우, 해당 모달의 isOpen값을 true로 변경
        modals[modalIndex].isOpen = true;
        modals[modalIndex].props = props;
        return [...modals];
      }
      //없는 모달이었다면, 추가하고 열어
      return [...modals, { Component, props, isOpen: true }];
    });
  };
  const close = (Component: ModalComponent) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;
