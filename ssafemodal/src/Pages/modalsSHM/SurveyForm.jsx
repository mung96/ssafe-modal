import { InputGroup, SurveyFormBlock, Tag, TagInput } from "./SurveyForm.element";
import { useState } from "react";

const SurveyForm = () => {
  const [tagList,setTagList] = useState([]);


  const handleTagAdd = (e) =>{
    if(e.key==="Enter"){
      setTagList([...tagList,e.target.value]);
    }
  }

  return (
    <SurveyFormBlock>
      <InputGroup>
        <label htmlFor="title">설문지 이름을 입력하세요.</label>
        <input id="title" name="title" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="body">설문지 내용을 입력하세요.</label>
        <textarea id="body" name="body" />
      </InputGroup>
      <ul>
        {tagList.map((tag)=><Tag key={tag}> {"#"+tag} </Tag>)}
        <TagInput onKeyDown={handleTagAdd} placeholder="#태그입력"/>
      </ul>
    </SurveyFormBlock>
  );
};

export default SurveyForm;
