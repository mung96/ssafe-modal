import { InputGroup, SurveyFormBlock } from "./SurveyForm.element";

const SurveyForm = () => {
  return (
    <SurveyFormBlock>
      <InputGroup>
        <label htmlFor="title">설문지 이름을 입력하세요.</label>
        <input id="title" name="title" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="title">설문지 내용을 입력하세요.</label>
        <textarea id="title" name="title" />
      </InputGroup>
      <ul>
        <button>태그없음</button>
      </ul>
    </SurveyFormBlock>
  );
};

export default SurveyForm;
