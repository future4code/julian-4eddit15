import React from "react";
import { useHistory } from 'react-router-dom';
import { useTheme } from "../../../hooks/useTheme";
import { useForm } from "../../../hooks/useForm";
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
} from "../Login/StyledLogin";

const MyTheme = useTheme();

const Register = () => {
  let history = useHistory();
  const goToFeedPage = () => history.push("/");

  const { form, onChange } = useForm({
    username: "",
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
      username: form.username,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup`,
        body
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToFeedPage();
      })
      .catch((error) => {
        window.alert("Falha ao cadastrar.");
      });
  };

  const back = () => {};

  return (
    <MuiThemeProvider theme={MyTheme}>
      <Container>
        <ContainerForm>
          <Form onSubmit={handleSubmit}>
            <Logotipo src={Logo} alt={"logotipo do site"} />
            <FotoUsuario src={Astrodev} alt={"imagem usuário"} />
            <h1>Cadastrar</h1>
            <TextField
              size='small'
              value={form.username}
              onChange={handleInputChange}
              name='username'
              type='text'
              label='Nome de usuário'
              required
            />
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
                onClick={back}
              >
                Voltar
              </Button>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                disableElevation
                size='medium'
              >
                Cadastrar
              </Button>
            </ContainerButtons>
          </Form>
        </ContainerForm>
      </Container>
    </MuiThemeProvider>
  );
};

export default Register;
