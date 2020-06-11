import React from "react";
import { useHistory } from "react-router-dom";
import Post from "./PostElement";
import axios from "axios";
import styled from "styled-components";
import { useTheme } from "../../../hooks/useTheme";
import { useForm } from "../../../hooks/useForm";
import { usePostsList } from "../../../hooks/usePostsList";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider } from "@material-ui/core";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";

const FeedContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const MyTheme = useTheme();

const Feed = () => {
  const posts = usePostsList();
  const token = localStorage.getItem("token");

  let history = useHistory();
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
      />
    );
  });

  return (
    <MuiThemeProvider theme={MyTheme}>
      <FeedContainer>
        <form onSubmit={handleSubmit}>
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
        </form>
        {postsList}
      </FeedContainer>
    </MuiThemeProvider>
  );
};

export default Feed;
