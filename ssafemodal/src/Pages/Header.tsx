import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea, HeaderLeft, Logo } from "../Styles/Header.jsx";

const Header = () => {
  return (
    <>
      <HeaderArea>
        <HeaderLeft>
          <Link to="/">
            <Logo>폼나는 싸패</Logo>
          </Link>
        </HeaderLeft>
      </HeaderArea>
    </>
  );
};

export default Header;
