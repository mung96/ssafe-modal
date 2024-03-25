import { NicknameConsumer } from "../../contexts/NicknameContext";
import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { CompleteButton, FormFooter } from "./LoginForm.element";
export const LoginForm = () => {
  const navigate = useNavigate();
  const nickname= useInput();
  const handleCompleteBtn = (actions: {
    setNickname: (newNickname: string) => void;
  }) => {
    navigate("/mySpace");
    actions.setNickname(nickname.value[0]);
  };
  return (
    <>
      <input onChange={nickname.handleChange} maxLength={10} minLength={4}/>
      <FormFooter>
        <NicknameConsumer>
          {({ actions }) => {
            return (
              <CompleteButton onClick={() => handleCompleteBtn(actions)} disabled={nickname.value.length<4}>
                확인
              </CompleteButton>
            );
          }}
        </NicknameConsumer>
      </FormFooter>
    </>
  );
};
