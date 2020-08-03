import React from "react";
import CardComment from "./CommentContainer";
import styled from "styled-components";
import logo from "../../../img/astrodev.png";
import { IconButton } from "@material-ui/core";
import { ArrowDownwardRounded, ArrowUpwardRounded } from "@material-ui/icons";
import axios from "axios";

const CommentContainer = styled(CardComment)`
  grid-template-rows: 20% 60% 20%;
`;

const CommentHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
`;

const ContainerImg = styled.section`
  width: 10%;
  height: 60%;
  margin-top: 3vh;
  margin-left: 1vw;
`;

const ImagemUsuario = styled.img`
  width: 92%;
  height: 92%;
`;

const UserComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
`;

const Comment = (props) => {
  const voteComment = (idComment, idPost, direction) => {
    const body = { direction };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${idPost}/comment/${idComment}/vote`,
        body,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        props.getPostDetail();
      })
      .catch((error) => {
        window.alert("Erro ao votar.");
      });
  };

  return (
    <CommentContainer>
      <CommentHeader>
        <ContainerImg>
          <ImagemUsuario src={logo} alt={"imagem usuário"} />
        </ContainerImg>
        <h4>{props.username}</h4>
      </CommentHeader>
      <UserComment>
        <div>
          <p>{props.text}</p>
        </div>
      </UserComment>
      <div>
        <IconButton
          onClick={() => voteComment(props.idComment, props.idPost, 1)}
          size={"small"}
        >
          <ArrowUpwardRounded />
        </IconButton>
        {props.votes}
        <IconButton
          onClick={() => voteComment(props.idComment, props.idPost, -1)}
          size={"small"}
        >
          <ArrowDownwardRounded />
        </IconButton>
      </div>
    </CommentContainer>
  );
};

export default Comment;
