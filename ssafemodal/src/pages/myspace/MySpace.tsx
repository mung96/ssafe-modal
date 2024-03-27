import BaseHeader from "../../components/header/Header";
import {
  MenuContainer,
  MySpaceContainer,
  TabContainer,
  WriteButton,
  TabButton,
  SearchBox,
  SearchButton,
  OrderButton,
  CardBox,
} from "./MySpace.element";
import { Card } from "../../components/card/Card";
import { BiSolidSearch } from "react-icons/bi";
import { IoCaretDownSharp } from "react-icons/io5";
import { useState } from "react";
import { ITag } from "../../components/forms/SurveyForm";
import dummy from "../../dummy.json";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/modals/Modal";
import uuid from "react-uuid";
import { useInput } from "../../hooks/useInput";
export interface ICard {
  id: string;
  title: string;
  content: string;
  tags: ITag[];
  date: Date;
}

const MySpace = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const title = useInput();
  const content = useInput();
  const [tags, setTags] = useState<ITag[]>([]);
  const handleClickWriteBtn = () => {
    openModal();
  };
  const [cards, setCards] = useState<ICard[]>([]);
  const addCard = (newCard: ICard) => {
    setCards([...cards, newCard]);
  };
  const handleConfirmBtnClick = () => {
    if (title && content) {
      const newCard = {
        id: uuid(),
        title: title.value,
        content: content.value,
        tags: tags,
        date: new Date(),
      };
      addCard(newCard);
      closeModal();
    }
    if (!title || !content) {
      //TODO: disable처리
      alert("제목과 본문을 채워주세요.");
    }
  };

  const confirm = {
    title: "확인",
    onClick: handleConfirmBtnClick,
  };
  const cancel = {
    title: "취소",
    onClick: closeModal,
  };
  const body = {
    input: [title],
    textarea: content,
    tag: {
      tags: tags,
      hasTag: true,
      setTags: setTags,
    },
  };

  return (
    <>
      <BaseHeader HeaderLogo="마이스페이스 👨‍💻" />
      <MenuContainer>
        <WriteButton onClick={handleClickWriteBtn}>새 설문 만들기</WriteButton>
        <TabContainer>
          <TabButton>보관함</TabButton>
          <TabButton disabled={true}>참여한 설문</TabButton>
        </TabContainer>
      </MenuContainer>
      <MySpaceContainer>
        <SearchBox>
          <SearchButton>
            프로젝트를 검색하세요
            <BiSolidSearch />
          </SearchButton>
          <OrderButton>
            최근에 수정된 순서
            <IoCaretDownSharp />
          </OrderButton>
        </SearchBox>
        <CardBox>
          {dummy.map((card) => {
            const modifiedCard = { ...card, date: new Date(card.date) };
            return <Card key={card.id} card={modifiedCard} />;
          })}
          {cards.map((card, idx) => (
            <Card key={card.id} card={card} />
          ))}
        </CardBox>
        {isModalOpen && (
          <Modal
            type="SURVEY"
            closeModal={closeModal}
            confirm={confirm}
            cancel={cancel}
            body={body}
          />
        )}
      </MySpaceContainer>
    </>
  );
};
export default MySpace;
