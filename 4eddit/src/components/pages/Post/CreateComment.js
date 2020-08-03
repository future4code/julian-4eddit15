import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import AddCommentOutlinedIcon from "@material-ui/icons/AddCommentOutlined";
import { useForm } from "../../../hooks/useForm";
import axios from "axios";

const ContainerCreateComment = styled.section`
  background-color: #fff;
  border-radius: 10px;
  min-height: 25vh;
  width: 40%;
  margin-bottom: 2vh;
  display: flex;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: space-around;
  }
`;

const CreateComment = (props) => {
  const { form, onChange, resetForm } = useForm({
    text: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      text: form.text,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.id}/comment`,
        body,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        resetForm();
        props.getPostDetail();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContainerCreateComment>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          variant='outlined'
          label='Escreva seu comentário'
          type='text'
          rowsMax='8'
          multiline
          value={form.text}
          name='text'
          onChange={handleInputChange}
        />
        <Button
          variant='outlined'
          endIcon={<AddCommentOutlinedIcon />}
          color='primary'
          type='submit'
          size='medium'
        >
          Comentar
        </Button>
      </form>
    </ContainerCreateComment>
  );
};

export default CreateComment;
