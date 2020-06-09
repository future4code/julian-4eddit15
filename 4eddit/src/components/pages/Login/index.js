import React from "react";
import { useTheme, useForm } from "../../Hooks";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider } from "@material-ui/core";
import Astrodev from "../../../img/astrodev.png";
import Logo from "../../../img/labeddit2.png";
import axios from "axios";
import {
  Container,
  ContainerForm,
  Form,
  Logotipo,
  FotoUsuario,
  ContainerButtons,
} from "./StyledLogin";

const { MyTheme } = useTheme();

const Login = () => {
  const { form, onChange } = useForm({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login`,
        body
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        window.alert("Falha ao entrar.");
      });
  };

  return (
    <MuiThemeProvider theme={MyTheme}>
      <Container>
        <ContainerForm>
          <Form onSubmit={handleSubmit}>
            <Logotipo src={Logo} alt={"logotipo do site"} />
            <FotoUsuario src={Astrodev} alt={"imagem usuário"} />
            <h1>Entrar</h1>
            <TextField
              size='small'
              value={form.email}
              onChange={handleInputChange}
              name='email'
              type='email'
              label='E-mail'
              required
            />
            <TextField
              size='small'
              value={form.password}
              onChange={handleInputChange}
              name='password'
              type='password'
              minLength='6'
              label='Senha'
              required
            />
            <ContainerButtons>
              <Button
                variant='contained'
                color='primary'
                disableElevation
                size='medium'
              >
                Cadastrar
              </Button>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                disableElevation
                size='medium'
              >
                Entrar
              </Button>
            </ContainerButtons>
          </Form>
        </ContainerForm>
      </Container>
    </MuiThemeProvider>
  );
};

export default Login;
