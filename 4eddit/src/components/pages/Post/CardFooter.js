import React from "react";
import { IconButton } from "@material-ui/core";
import { ArrowDownwardRounded, ArrowUpwardRounded } from "@material-ui/icons";
import styled from "styled-components";
import axios from "axios";
import { usePostsList } from "../../../hooks/usePostsList";

const Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  width: 90%;
  height: 100%;
`;

const FooterItem = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  justify-content: ${(props) => (props.init ? "flex-start" : "flex-end")};
  width: 80%;
  height: 100%;
  overflow: hidden;
`;

const CardFooter = (props) => {
  const posts = usePostsList();

  const vote = (id, direction) => {
    console.log(id);
    let count = 0;
    direction === "up" ? (count = 1) : (count = -1);

    const body = {
      direction: count,
    };

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
        posts();
      })
      .catch((error) => {
        alert("Erro ao votar");
      });
  };

  return (
    <Footer>
      <FooterItem show init>
        <IconButton onClick={() => vote(props.id, "up")} size={"small"}>
          <ArrowUpwardRounded />
        </IconButton>
        {props.votesNumber}
        <IconButton onClick={() => vote(props.id, "down")} size={"small"}>
          <ArrowDownwardRounded />
        </IconButton>
      </FooterItem>
      <FooterItem show={props.comment}>
        <p>{props.commentsNumber} comentários</p>
      </FooterItem>
    </Footer>
  );
};

export default CardFooter;
