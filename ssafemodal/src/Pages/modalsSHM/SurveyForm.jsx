import { InputGroup, SurveyFormBlock, Tag, TagInput } from "./SurveyForm.element";
import { useState } from "react";

const SurveyForm = () => {
  const [tagList,setTagList] = useState([]);


  const handleTagAdd = (e) =>{
    if(e.key==="Enter"){
      setTagList([...tagList,e.target.value]);
    }
  }
  console.log(tagList);
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
        {tagList.map((tag)=><Tag> {"#"+tag} </Tag>)}
        <TagInput onKeyDown={handleTagAdd} placeholder="#태그입력"/>
      </ul>
    </SurveyFormBlock>
  );
};

export default SurveyForm;
