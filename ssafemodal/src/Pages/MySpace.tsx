import React from "react";
import { WriteButton } from "../Styles/MySpace";
import { Container, TextBoard } from "../Styles/Home";

const MySpace = () => {
  return (
    <Container>
      <TextBoard>
        <WriteButton>새 설문 만들기</WriteButton>
      </TextBoard>
    </Container>
  );
};
export default MySpace;
