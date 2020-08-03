import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Post from "./PostElement";
import axios from "axios";
import { useTheme } from "../../../hooks/useTheme";
import { useForm } from "../../../hooks/useForm";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider } from "@material-ui/core";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import Styled from "styled-components";
import Header from "../../Header";

const Container = Styled.main`
  background-color: #dae0e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerForm = Styled.section`
  background-color: #FFF;
  margin-top: 4vh;
  border-radius: 10px;
  display: flex;
  width: 40%;
  height: 30vh;
  justify-content: center;
`;

const Form = Styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: space-around;
`;

const MyTheme = useTheme();

const Feed = () => {
  const [posts, setPosts] = useState([]);
  let history = useHistory();
  const token = localStorage.getItem("token");

  if (token === null) {
    history.push("/login");
  }

  const goToPostDetails = (id) => history.push(`/post/${id}`);

  const { form, onChange, resetForm } = useForm({
    text: "",
    title: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      text: form.text,
      title: form.title,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts`,
        body,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        resetForm();
        posts();
      })
      .catch((error) => {
        window.alert("Falha ao postar.");
      });
  };

  const getPosts = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const postsList = posts.map((post) => {
    return (
      <Post
        key={post.id}
        username={post.username}
        title={post.title}
        content={post.text}
        votesNumber={post.votesCount}
        commentsNumber={post.commentsCount}
        details={() => goToPostDetails(post.id)}
        id={post.id}
        getPosts={getPosts}
      />
    );
  });

  return (
    <MuiThemeProvider theme={MyTheme}>
      <Header />
      <Container>
        <ContainerForm>
          <Form onSubmit={handleSubmit}>
            <TextField
              size='small'
              variant='outlined'
              required
              label='Título'
              type='text'
              inputProps={{
                pattern: "{5,}",
                title: "O título deve conter mais de 5 caracteres",
              }}
              name='title'
              value={form.title}
              onChange={handleInputChange}
            />
            <TextField
              required
              variant='outlined'
              label='Escreva seu post'
              type='text'
              inputProps={{
                pattern: "{30,}",
                title: "O post deve ter mais de 30 caracteres",
              }}
              rowsMax='8'
              multiline
              value={form.text}
              name='text'
              onChange={handleInputChange}
            />
            <Button
              variant='outlined'
              endIcon={<PostAddOutlinedIcon />}
              color='primary'
              type='submit'
              size='medium'
            >
              Criar Post
            </Button>
          </Form>
        </ContainerForm>
        {postsList}
      </Container>
    </MuiThemeProvider>
  );
};

export default Feed;
