import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import Header from "../../Header";
import Post from "../Feed/PostElement";
import axios from "axios";
import styled from "styled-components";
import { MuiThemeProvider } from "@material-ui/core";
import { useTheme } from "../../../hooks/useTheme";
import { useHistory } from "react-router-dom";

const PostPageContainer = styled.div`
  background-color: #dae0e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

const PostPage = () => {
  const MyTheme = useTheme();
  let history = useHistory();
  const token = localStorage.getItem("token");

  if (token === null) {
    history.push("/login");
  }

  const [post, setPost] = useState("");

  const pathParams = useParams();

  const getPostDetails = () => {
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
        console.log(error);
      });
  };

  useEffect(() => {
    getPostDetails();
  }, []);

  let comments;

  if (post.comments) {
    comments = post.comments.map((comment) => {
      return (
        <Comment
          key={comment.id}
          username={comment.username}
          text={comment.text}
          votes={comment.votesCount}
          idComment={comment.id}
          getPostDetail={getPostDetails}
          idPost={pathParams.post_id}
        />
      );
    });
  }

  return (
    <MuiThemeProvider theme={MyTheme}>
      <Header />
      <PostPageContainer>
        <Post
          username={post.username}
          title={post.title}
          content={post.text}
          votesNumber={post.votesCount}
          commentsNumber={post.commentsCount}
          id={post.id}
          getPostDetail={getPostDetails}
        />
        <CreateComment getPostDetail={getPostDetails} id={post.id} />
        {comments}
      </PostPageContainer>
    </MuiThemeProvider>
  );
};

export default PostPage;
