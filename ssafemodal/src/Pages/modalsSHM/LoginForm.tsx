import { NicknameConsumer } from "../contexts/NicknameContext";
import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";

export const LoginForm = () =>{
    const navigate = useNavigate();
    const [nickname, changeNickname] = useInput();
    const handleCompleteBtn = (actions: {
      setNickname: (newNickname: string) => void;
    }) => {
      navigate("/mySpace");
      actions.setNickname(nickname[0]);
    };
    return <>
    <input onChange={changeNickname} />
    <NicknameConsumer>
            {({ state, actions }) => {
              return (
                <button onClick={() => handleCompleteBtn(actions)}>확인</button>
              );
            }}
    </NicknameConsumer>
    </>
}