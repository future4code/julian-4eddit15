import React from "react";
import CardFooter from "./CardFooter";
import CardComment from "./CommentContainer";
import styled from "styled-components";

const CommentContainer = styled(CardComment)`
  grid-template-rows: 15% 65% 20%;
`;

const UserComment = styled.div`
  width: 90%;
  height: 100%;
`;

const Comment = (props) => {
  return (
    <CommentContainer>
      <h4>{props.username}</h4>
      <UserComment>
        <p>{props.text}</p>
      </UserComment>
      <CardFooter votesNumber={props.votes} />
    </CommentContainer>
  );
};

export default Comment;
