import React from 'react';
import { Card } from '@material-ui/core';
import CardFooter from '../Post/CardFooter';
import styled from 'styled-components';

import logo from '../../../img/labeddit.png';

const PostContainer = styled(Card)`
    display: grid;
    grid-template-rows: 15% 70% 15%;
    align-items: center;
    justify-items: center;
    width: 30%;
    height: 40vh;
    margin: 5vh 0;
    cursor: ${props => props.view ? "default" : "pointer"};
`

const PostHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 100%;

`

const Logo = styled.img`
    width: 15%;
    height: 15%;
`

const PostContent = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
`

const Post = (props) => {
    return (
        <PostContainer onClick={props.details} view={props.view}>
            <PostHeader>
                <Logo src={logo} alt={"Logo LabEddit"} />
                <h3>{props.title}</h3>
                {props.username}
            </PostHeader>
            <PostContent>
                {props.content}
            </PostContent>
            <CardFooter votesNumber={props.votesNumber} commentsNumber={props.commentsNumber} comment />
        </PostContainer>
    )
}

export default Post;