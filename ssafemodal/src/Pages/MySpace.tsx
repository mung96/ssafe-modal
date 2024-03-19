import React from "react";
import BaseHeader from "../BaseComponents/BaseHeader";
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
} from "../Styles/MySpace";
import BaseCard from "../BaseComponents/BaseCard";
import { BiSolidSearch } from "react-icons/bi";
import { IoCaretDownSharp } from "react-icons/io5";
import { useState } from "react";
import { SurveyModalSHM } from "./modalsSHM/SuerveyModalSHM";
interface Card {
  id: string;
  title: string;
  body: string;
  tags: string[];
  date: Date;
}

const MySpace = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickWriteBtn = () => {
    setIsModalOpen(true);
  };
  const [cards, setCards] = useState<Card[]>([]);
  const addCard = (
    id: string,
    title: string,
    body: string,
    tags: string[],
    date: Date
  ) => {
    const newCard = {
      id: id,
      title: title,
      body: body,
      tags: tags,
      date: date,
    };
    setCards([...cards, newCard]);
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
          {cards.map((card) => (
            <BaseCard card={card} />
          ))}
          {/* <BaseCard
            title="좋아하는 음식"
            body="좋아하는 음식을 설문조사해서 맛있는 음식을 판매합니다. 사람들이 좋아하는 음식은 무엇일까요?"
            tags={["안녕"]}
          /> */}
        </CardBox>
        {isModalOpen && (
          <SurveyModalSHM addCard={addCard} setIsModalOpen={setIsModalOpen} />
        )}
      </MySpaceContainer>
    </>
  );
};
export default MySpace;
