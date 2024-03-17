import React from "react";
import { useState } from "react";
import { WriteButton } from "../Styles/MySpace";
import { Container, TextBoard } from "../Styles/Home";
import { SurveyModalSHM } from "./modalsSHM/SuerveyModal";

const MySpace = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickWriteBtn = () => {
    setIsModalOpen(true);
  };
  return (
    <Container>
      <TextBoard>
        <WriteButton onClick={handleClickWriteBtn}>새 설문 만들기</WriteButton>
      </TextBoard>
      {isModalOpen && <SurveyModalSHM setIsModalOpen={setIsModalOpen} />}
    </Container>
  );
};
export default MySpace;
