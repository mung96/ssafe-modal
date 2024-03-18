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
import { Tag } from "../Pages/modalsSHM/SurveyForm.element.jsx";

export const BaseCard = ({title, body,tag}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDate>작성일: 2024/03/18</CardDate>
      </CardHeader>
      <CardContents>
        <Question>{body}</Question>
        <QuestionInfo>
          <b>문항수</b>: 30개
          <br />
          <b>예상소요시간</b>: 30분
        </QuestionInfo>
        <CardTagBox>
          <Tag>{tag}</Tag>
        </CardTagBox>
      </CardContents>
    </Card>
  );
};


export default BaseCard;
