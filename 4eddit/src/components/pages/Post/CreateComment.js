import React from "react";
import { Button } from "@material-ui/core";
import CardComment from "./CommentContainer";
import styled from "styled-components";

const CommentContainer = styled(CardComment)`
  grid-template-rows: 70% 30%;
`;

const CommentText = styled.textarea`
  width: 90%;
  height: 90%;
  border-radius: 5px;
  resize: none;
`;

const CreateComment = () => {
  return (
    <CommentContainer>
      <CommentText placeholder={"Deixe seu comentário"} />
      <Button variant={"contained"} color={"secondary"} size={"small"}>
        <strong>Comentar</strong>
      </Button>
    </CommentContainer>
  );
};

export default CreateComment;
