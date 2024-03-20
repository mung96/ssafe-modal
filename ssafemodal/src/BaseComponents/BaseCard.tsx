import {
  Card,
  CardHeader,
  CardTitle,
  CardDate,
  CardContents,
  Question,
  QuestionInfo,
  CardTagBox,
} from "../Styles/BaseCard";
import { Tag } from "../Pages/modalsSHM/SurveyForm.element";
import { ITag } from "../Pages/modalsSHM/SurveyForm";

interface Card {
  card: {
    id: string;
    title: string;
    body: string;
    date: Date;
    tags: ITag[];
  };
}

export const BaseCard: React.FC<Card> = ({ card }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
        <CardDate>{card.date.toLocaleDateString()}</CardDate>
      </CardHeader>
      <CardContents>
        <Question>{card.body}</Question>
        <QuestionInfo>
          <b>문항수</b>: 30개
          <br />
          <b>예상소요시간</b>: 30분
        </QuestionInfo>
        <CardTagBox>
          {card.tags.map((tag: ITag, idx: number) => (
            <Tag key={idx} color={tag.color}>{tag.value}</Tag>
          ))}
        </CardTagBox>
      </CardContents>
    </Card>
  );
};

export default BaseCard;
