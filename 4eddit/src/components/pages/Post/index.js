import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import Header from "../../Header";
import Post from "../Feed/PostElement";
import { usePrivatePage } from "../../../hooks/usePrivatePage";
import axios from "axios";
import styled from "styled-components";

const PostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

const PostPage = () => {
  usePrivatePage();

  const [post, setPost] = useState("");

  const pathParams = useParams();

  useEffect(() => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.post_id}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setPost(response.data.post);
      })
      .catch((error) => {
        alert("Erro na obtenção dos dados");
      });
  }, [pathParams.post_id]);

  let comments;
  if (post.comments) {
    comments = post.comments.map((comment) => {
      return (
        <Comment
          username={comment.username}
          text={comment.text}
          votes={comment.votesCount}
        />
      );
    });
  }

  return (
    <PostPageContainer>
      <Header />
      <Post
        username={post.username}
        title={post.title}
        content={post.text}
        votesNumber={post.votesCount}
        commentsNumber={post.commentsCount}
        id={post.id}
        view
      />
      <CreateComment />
      {comments}
    </PostPageContainer>
  );
};

export default PostPage;
