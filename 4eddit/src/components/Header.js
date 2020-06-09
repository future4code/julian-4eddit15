import React from "react";
import Logo from "../img/labeddit2.png";
import Styled from "styled-components";

const Container = Styled.main`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e5e5e4;
`;

const Logotipo = Styled.img`
    width: 20%;
    height: 85%;
    :hover {
        cursor: pointer;
    }
`;

const Header = (props) => {
  return (
    <Container>
      <Logotipo  src={Logo} alt='logotipo' />
    </Container>
  );
};

export default Header;
