import React, { ChangeEvent } from "react";
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
import { v4 as uuidv4 } from "uuid";
interface SurveyModal {
  addCard: (
    id: string,
    title: string,
    body: string,
    tags: string[],
    date: Date
  ) => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SurveyModalSHM: React.FC<SurveyModal> = ({
  addCard,
  setIsModalOpen,
}) => {
  const [title, handleTitleChange] = useInput();
  const [body, setBody] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const clickOutside = () => {
    setIsModalOpen(false);
  };

  const handleClickBtn = () => {
    addCard(uuidv4(), title, body, tags, new Date());
    setIsModalOpen(false);
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
