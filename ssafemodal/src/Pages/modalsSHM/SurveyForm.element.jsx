import styled from "styled-components";

export const SurveyFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: #FAFAFA;
  padding: 16px 32px 16px 16px;

  border-radius: 8px;

  ul{
    display: flex;
    flex-direction: row;
    width: fit-content;
    /* overflow-x:scroll; */
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label{
    font-size: 16px;
    line-height: 24px;
  }

  input,
  textarea {
    width: 100%;
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
  }

  input{
    height: 32px;
  }

  textarea{
    height: 96px;
    resize: none;
  }
`;

export const Tag = styled.li`
  display: inline-block;
  height: 32px;
  padding: 0px 24px;
  font-size: 12px;
  color:white;
  background-color: #FF7364;
  line-height: 32px;
  margin-right: 10px;
  font-weight: 700;
  border-radius: 4px;
`

export const TagInput = styled.input`
  display: inline-block;
  width: 100px; 
  height: 32px;
  padding: 0px 24px;

  color:black;
  line-height: 32px;
  font-weight: 700;

  border:none;
  outline:none;
  background-color: #D4D4D4;
  border-radius: 4px;
  
  &::placeholder{
    color:black;
    font-weight: 700;
  }
`