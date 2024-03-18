import React from "react";
import {
  ModalBlock,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalMain,
} from "./ModalSHM.element";
import SurveyForm from "./SurveyForm";
import { useInput } from "../../hooks/useInput";
import { useState } from "react";

export const SurveyModalSHM = ({ addCard, setIsModalOpen }) => {
  const [title, handleTitleChange] = useInput();
  const [body, handleBodyChange] = useInput();
  const [tags, setTags] = useState([]);

  const clickOutside = () => {
    setIsModalOpen(false);
  };

  const handleClickBtn = () => {
    addCard(title, body, tags);
  };
  return (
    <>
      <ModalBlock onClick={clickOutside}></ModalBlock>
      <Modal>
        <ModalHeader>
          <h2>새로운 설문지를 작성합니다.</h2>
          <span>새로운 설문지를 작성하기 위한 설정입니다.</span>
        </ModalHeader>
        <ModalMain>
          <SurveyForm
            handleTitleChange={handleTitleChange}
            handleBodyChange={handleBodyChange}
            tags={tags}
            setTags={setTags}
          />
        </ModalMain>
        <ModalFooter>
          <button onClick={handleClickBtn}>확인</button>
        </ModalFooter>
      </Modal>
    </>
  );
};
