import React from "react";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import logo from "../../../img/astrodev.png";
import { IconButton } from "@material-ui/core";
import { ArrowDownwardRounded, ArrowUpwardRounded } from "@material-ui/icons";
import axios from "axios";

const PostContainer = styled(Card)`
  display: grid;
  grid-template-rows: 15% 70% 15%;
  align-items: center;
  justify-items: center;
  width: 40%;
  min-height: 40vh;
  margin: 5vh 0;
  cursor: pointer;
`;

const PostHeader = styled.header`
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: space-around;
`;

const ImagemUsuario = styled.img`
  width: 10%;
  height: 80%;
  margin-top: 2vh;
`;

const PostContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
`;

const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;

  section {
    margin: 1vw;
  }

  p {
    margin: 1vw;
  }
`;

const Post = (props) => {
  const vote = (id, direction) => {
    const body = { direction };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`,
        body,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        props.getPosts()
      })
      .catch((error) => {
        window.alert("Erro ao votar.")
      });
  };

  return (
    <PostContainer>
      <PostHeader>
        <ImagemUsuario src={logo} alt={"imagem usuário"} />
        <h3>{props.title}</h3>
        {props.username}
      </PostHeader>
      <PostContent onClick={props.details}>{props.content}</PostContent>
      <Footer>
        <section>
          <IconButton onClick={() => vote(props.id, 1)} size={"small"}>
            <ArrowUpwardRounded />
          </IconButton>
          {props.votesNumber}
          <IconButton onClick={() => vote(props.id, -1)} size={"small"}>
            <ArrowDownwardRounded />
          </IconButton>
        </section>
        {props.commentsNumber > 1 ? (
          <p>{props.commentsNumber + " comentários"}</p>
        ) : (
          <p>{props.commentsNumber + " comentário"} </p>
        )}
      </Footer>
    </PostContainer>
  );
};

export default Post;
