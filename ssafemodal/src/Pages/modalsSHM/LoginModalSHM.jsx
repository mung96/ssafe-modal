import React from "react";
import { useRef, useState } from "react";
import { LoginModalBlock, Modal, ModalHeader } from "./LoginModalSHM.element";

export const LoginModalSHM = ({ setIsModalOpen }) => {
  const clickOutside = () => {
    setIsModalOpen(false);
  };
  return (
    <LoginModalBlock onClick={clickOutside}>
      <Modal>
        <ModalHeader>
          <h2>닉네임을 입력하세요.</h2>
          <span>닉네임은 최소 4글자 이상이어야 합니다.</span>
        </ModalHeader>
        <input />
        <button>확인</button>
      </Modal>
    </LoginModalBlock>
  );
};
