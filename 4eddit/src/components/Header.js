import React from "react";
import Logo from "../img/labeddit2.png";
import Styled from "styled-components";
import { useHistory } from "react-router-dom";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

const Container = Styled.main`
    height: 15vh;
    display: grid;
    grid-template-columns: 5% 95%;
    grid-template-rows: 1fr;
    background-color: #18262f;
    justify-items: center;
    align-items: center;
`;

const Logotipo = Styled.img`
    width: 20%;
    height: 85%;

    :hover {
        cursor: pointer;
    }
`;

const Icon = Styled(ArrowBackOutlinedIcon)`
  color: #FFF;
  cursor: pointer;
`;

const Header = (props) => {
  let history = useHistory();
  return (
    <Container>
      <Icon fontSize='large' onClick={() => history.goBack()} />
      <Logotipo onClick={() => history.push("/")} src={Logo} alt='logotipo' />
    </Container>
  );
};

export default Header;
