import React from "react";
import { HeaderArea, HeaderLeft, Logo } from "../Styles/BaseHeader.jsx";

type Props = {
  HeaderLogo?: string;
};

const BaseHeader = ({ HeaderLogo }: Props) => {
  return (
    <>
      <HeaderArea>
        <HeaderLeft>
          <Logo>{HeaderLogo}</Logo>
        </HeaderLeft>
      </HeaderArea>
    </>
  );
};

export default BaseHeader;
