import React from 'react';
import Comment from './Comment';
import CreateComment from './CreateComment';
import Header from '../../Header';
import Post from './PostElement';
import { usePrivatePage } from '../../../hooks/usePrivatePage';
import styled from 'styled-components';

const PostPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
`

const PostPage = () => {
    usePrivatePage();
    return (
        <PostPageContainer>
            <Header />
            <Post
                username={"wcardosos"}
                content={"Postagem teste"}
                votes={0}
                comments={3}
            />
            <CreateComment />
            <Comment username={"usuario"} text={"Texto sobre alguma coisa"} votes={3} />
        </PostPageContainer>
    )
}

export default PostPage;