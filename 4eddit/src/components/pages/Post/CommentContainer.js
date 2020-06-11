import React from "react";
import { Card } from "@material-ui/core";
import styled from "styled-components";

const Container = styled(Card)`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 30%;
  height: 25vh;
  margin: 5vh 0;
`;

const CommentContainer = (props) => {
  return <Container className={props.className}>{props.children}</Container>;
};

export default CommentContainer;
