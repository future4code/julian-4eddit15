import React from 'react';
import { IconButton } from '@material-ui/core';
import { ArrowDownwardRounded, ArrowUpwardRounded } from '@material-ui/icons';
import styled from 'styled-components';

const Footer = styled.footer`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    width: 90%;
    height: 100%;
`

const FooterItem = styled.div`
    display: ${props => props.show ? "flex" : "none"};
    align-items: center;
    justify-content: ${props => props.init ? "flex-start" : "flex-end"};
    width: 80%;
    height: 100%;
    overflow: hidden;
`

const CardFooter = (props) => {
    return (
        <Footer>
            <FooterItem show init>
                <IconButton size={"small"}>
                    <ArrowUpwardRounded />
                </IconButton>
                {props.votesNumber}
                <IconButton size={"small"}>
                    <ArrowDownwardRounded />
                </IconButton>
            </FooterItem>
            <FooterItem show={props.comment}>
                <p>{props.commentsNumber} comentários</p>
            </FooterItem>
        </Footer>
    )
}

export default CardFooter;