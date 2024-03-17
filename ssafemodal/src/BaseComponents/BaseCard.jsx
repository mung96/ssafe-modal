import {
  Card,
  CardHeader,
  CardTitle,
  CardDate,
  CardContents,
  Question,
  QuestionInfo,
  CardTagBox,
  CardTag,
} from "../Styles/BaseCard.jsx";

const BaseCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>좋아하는 음식</CardTitle>
        <CardDate>작성일: 2024/03/18</CardDate>
      </CardHeader>
      <CardContents>
        <Question>
          좋아하는 음식을 설문조사해서 맛있는 음식을 판매합니다. 사람들이
          좋아하는 음식은 무엇일까요?
        </Question>
        <QuestionInfo>
          문항수: 30개
          <br />
          예상소요시간: 30분
        </QuestionInfo>
        <CardTagBox>
          <CardTag>#빠른검사</CardTag>
          <CardTag>#심리</CardTag>
        </CardTagBox>
      </CardContents>
    </Card>
  );
};

export default BaseCard;
