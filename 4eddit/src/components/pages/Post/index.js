import React from 'react';
import Comment from './Comment';
import CreateComment from './CreateComment';
import Post from './PostElement';
import styled from 'styled-components';

const PostPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
`

const PostPage = () => {
    return (
        <PostPageContainer>
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