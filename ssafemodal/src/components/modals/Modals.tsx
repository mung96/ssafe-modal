import {
  ModalsDispatchContext,
  ModalsStateContext,
} from "../../contexts/ModalContext";
import { useContext } from "react";

export const Modals = () => {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return (
    <>
      {openedModals.map((modal, idx) => {
        const { Component, props } = modal;
        const onClose = () => {
          close(Component);
        };
        return <Component key={idx} onClose={onClose} {...props} />;
      })}
    </>
  );
};
