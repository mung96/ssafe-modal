import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextBoard,
  SubTitle,
  Title,
  Description,
  SignupButton,
} from "./Home.element";

import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/modals/Modal";
import { useInput } from "../../hooks/useInput";
import { useContext } from "react";
import NicknameContext from "../../contexts/NicknameContext";
import { ModalsStateContext } from "../../contexts/ModalContext";
import { Modals } from "../../components/modals/Modals";

const Home = () => {
  const { openModal, closeModal } = useModal();
  const a = useContext(ModalsStateContext);
  const { actions } = useContext(NicknameContext);
  const nickname = useInput();

  const navigate = useNavigate();
  const handleConfirmBtnClick = () => {
    actions.setNickname(nickname.value[0]);
    navigate("/mySpace");
  };

  const confirm = {
    title: "확인",
    onClick: handleConfirmBtnClick,
    disabledCond: nickname.value.length < 4,
  };
  const body = {
    input: [
      {
        name: "nickname",
        field: nickname,
      },
    ],
  };
  const handleClickLoginBtn = () => {
    console.log(Modal);
    openModal(Modal, {
      type: "LOGIN",
      closeModal: { closeModal },
      confirm: { confirm },
      body: { body },
    });
    console.log(a);
  };
  return (
    <>
      <Header HeaderLogo="폼나는싸패" />
      <Container>
        <TextBoard>
          <SubTitle>데이터 수집을 위한 올인원 툴</SubTitle>
          <Title>
            폼을 만들고 분석하는
            <br />
            가장 합리적인 방법
          </Title>
          <Description>
            폼의 제작, 응답자 모집, 보상, 분석에 불필요한 시간을 쏟지 마세요.
            <br />
            모든 핵심 과정을 폼나는싸패에서 한번에 해결하실 수 있습니다.
          </Description>
        </TextBoard>
        <SignupButton onClick={handleClickLoginBtn}>로그인</SignupButton>
        <Link to="/mySpace">
          <SignupButton>Move to MySpace</SignupButton>
        </Link>
      </Container>
      <Modals />
    </>
  );
};

export default Home;
