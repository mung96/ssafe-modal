import styled from "styled-components";

export const SurveyFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: #d4d4d4;
  padding: 16px 32px 16px 16px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    width: 100%;
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
  }
`;
