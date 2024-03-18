import React from "react";
import { HeaderArea, Logo, Profile } from "../Styles/BaseHeader.jsx";

type Props = {
  HeaderLogo?: string;
  nickname?: string;
};

const BaseHeader = ({ HeaderLogo, nickname }: Props) => {
  return (
    <>
      <HeaderArea>
        <Logo>{HeaderLogo}</Logo>
        {nickname && <Profile>{nickname[0]}</Profile>}
      </HeaderArea>
    </>
  );
};

export default BaseHeader;
