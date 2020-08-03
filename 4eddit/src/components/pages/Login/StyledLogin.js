import Styled from "styled-components";
import BackgroundLogin from "../../../img/backgroundLogin.png";

export const Container = Styled.main`
    background-image: url(${BackgroundLogin});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(10,23,55,0.4);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerForm = Styled.section` 
    background-color: #ffffff;
    width: 40%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = Styled.form`
    height: 80%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
        text-align: center;
    }
`;

export const Logotipo = Styled.img`
    width: 70%;
    align-self: center;
`;

export const FotoUsuario = Styled.img`
    width: 15%;
    height: 15%;
    align-self: center;
`;

export const ContainerButtons = Styled.section`
    margin-top: 4vh;
    display: flex;
    justify-content: space-around;
`;
