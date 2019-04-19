import React from "react";
import styled from 'styled-components';

const Header = styled.header`
    background: linear-gradient(to right, #33CCCC, #FFFFFF);
    text-align: center;
    height: 130px;
    position: relative;
    margin-bottom: -7px;
`;
const H1 = styled.h1`
    font-size: 50px;
    color: #336666;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);

`;

export default class HeaderVocabulary extends React.Component {

    render() {
        return (
            <Header>
                <H1><b>Vocabulary</b></H1>
            </Header>
        )
    }
}