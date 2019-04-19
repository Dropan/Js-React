import React from "react";
import styled from 'styled-components';
import ListWords from "./ListWords";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const DivSearch = styled.div`
    border: 1px solid;
    border-color: #003366;
    border-radius: 8px 8px 0 0;
    background: #003366;
    height: 150px;
    width: 800px;
    margin: auto;
`;

const InputSearch = styled.input`
    border: 1px solid;
    border-color: #003366;
    border-radius: 8px 0 0 8px;
    background: #FFFFFF;
    font-size: 25px;
    height: 50px;
    width: 570px;
    margin: 0;
    position: absolute;
    top: 20%;
    left: 46%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`;
const Button = styled.button`
    border: 2px solid;
    border-color: #FFFFFF;
    border-radius: 0 8px 8px 0;
    background: #8ED9DC;
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    color: #336666;
    height: 48px;
    width: 150px;
    margin: 0;
    position: absolute;
    top: 20%;
    left: 64.6%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`;

export default class SearchWords extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            inp: '',
        };
        this.InputChange = this.InputChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch() {
        // console.log("Inp:", this.state.inp);
        this.setState({ inp: this.state.input })
    }

    InputChange(event) {
        // console.log("InputChange:", event.target.value);
        this.setState({ input: event.target.value });
    }

    render() {
        return (
            <div>
                <ReactCSSTransitionGroup transitionName="anima" transitionAppear={true} transitionAppearTimeout={1000} transitionEnter={false} transitionLeave={false}>
                    <DivSearch>
                        <InputSearch type="search" onChange={this.InputChange} placeholder=" Enter word"></InputSearch>
                        <Button onClick={this.onSearch}><b>Search</b></Button>
                    </DivSearch>
                    <ListWords inp={this.state.inp}></ListWords>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}