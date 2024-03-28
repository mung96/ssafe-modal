// import { useState } from "react";

// export const useModal = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return { isModalOpen, openModal, closeModal };
// };

import { useContext } from "react";
import {
  ModalComponent,
  ModalProps,
  ModalsDispatchContext,
} from "../contexts/ModalContext";

export const useModal = () => {
  const { open, close } = useContext(ModalsDispatchContext);

  const openModal = (Component: ModalComponent, props: ModalProps) => {
    open(Component, props);
  };
  const closeModal = (Component: ModalComponent) => {
    close(Component);
  };

  return { openModal, closeModal };
};
