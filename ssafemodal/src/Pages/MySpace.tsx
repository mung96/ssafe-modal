import React from "react";
import BaseHeader from "../BaseComponents/BaseHeader.tsx";
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
} from "../Styles/MySpace.jsx";
import BaseCard from "../BaseComponents/BaseCard.jsx";
import { BiSolidSearch } from "react-icons/bi";
import { IoCaretDownSharp } from "react-icons/io5";

const MySpace = () => {
  return (
    <>
      <BaseHeader HeaderLogo="마이스페이스" />
      <MenuContainer>
        <WriteButton>새 설문 만들기</WriteButton>
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
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
          <BaseCard></BaseCard>
        </CardBox>
      </MySpaceContainer>
    </>
  );
};
export default MySpace;
