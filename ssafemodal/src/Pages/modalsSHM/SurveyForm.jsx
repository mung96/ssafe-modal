import {
  InputGroup,
  SurveyFormBlock,
  Tag,
  TagInput,
} from "./SurveyForm.element";

const SurveyForm = ({ handleTitleChange, handleBodyChange, tags, setTags }) => {
  const handleTagAdd = (e) => {
    if (e.key === "Enter") {
      setTags([...tags, e.target.value]);
    }
  };

  return (
    <SurveyFormBlock>
      <InputGroup>
        <label htmlFor="title">설문지 이름을 입력하세요.</label>
        <input id="title" name="title" onChange={handleTitleChange} />
      </InputGroup>
      <InputGroup>
        <label htmlFor="body">설문지 내용을 입력하세요.</label>
        <textarea id="body" name="body" onChange={handleBodyChange} />
      </InputGroup>
      <ul>
        {tags?.map((tag, idx) => (
          <Tag key={idx}> {"#" + tag} </Tag>
        ))}
        <TagInput onKeyDown={handleTagAdd} placeholder="#태그입력" />
      </ul>
    </SurveyFormBlock>
  );
};

export default SurveyForm;
