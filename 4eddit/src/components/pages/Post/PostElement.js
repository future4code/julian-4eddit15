import React from 'react';
import { Card } from '@material-ui/core';
import CardFooter from './CardFooter';
import styled from 'styled-components';

const PostContainer = styled(Card)`
    display: grid;
    grid-template-rows: 15% 70% 15%;
    align-items: center;
    justify-items: center;
    width: 30%;
    height: 40vh;
    margin: 5vh 0;
`

const PostContent = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
`

const Post = (props) => {
    return (
        <PostContainer>
            {props.username}
            <PostContent>
                {props.content}
            </PostContent>
            <CardFooter votesNumber={3} commentsNumber={2} comment />
        </PostContainer>
    )
}

export default Post;