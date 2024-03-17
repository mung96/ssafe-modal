import React from "react";
import { HeaderArea, Logo } from "../Styles/BaseHeader.jsx";

type Props = {
  HeaderLogo?: string;
};

const BaseHeader = ({ HeaderLogo }: Props) => {
  return (
    <>
      <HeaderArea>
        <Logo>{HeaderLogo}</Logo>
      </HeaderArea>
    </>
  );
};

export default BaseHeader;
