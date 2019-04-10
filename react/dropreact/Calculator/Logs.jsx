import React from "react";

import styled from 'styled-components';

const DivLogs = styled.div`
    background: #F5F5DC;
`;

const Img = styled.img`
    margin-left: 32%;
    width: 700px;
    height: 500px;
`;

const Winner = styled.p`
    font-size: 64px;
    color: #FF0000;
    text-align: center;
`;

const LogsView = styled.p`
    height: 20px;
    color: #9ACD32;
    font-size: large;
    margin-left: 48%;
`;

const Ul = styled.div`
    background: #9ACD32;
    margin-left: 32%;
    width: 700px;
    height: 800px;
    font-size: large;
    text-align: center;
    color: #F5F5DC;
    border: 2px solid;
    border-color: #9ACD32;
`;

// const Textarea = styled.textarea`
//     marginLeft: 37%;
//     fontSize: large;
//     textAlign: center;
//     background: #9ACD32;
//     color: #F5F5DC;
//     border: 2px solid;
//     borderColor: #9ACD32;
// `;

export default class Logs extends React.Component {

    render() {
        return (
            <DivLogs >
                <br />
                <LogsView ><b>Logs:</b></LogsView>
                <Ul >
                    {this.props.logs.map((e, i) => {
                        return <div key={i}>{JSON.stringify(e)}</div>
                    })}
                </Ul >
                {/* <Textarea
                    rows="35"
                    cols="50"
                    readOnly
                    value={this.props.logs}
                    placeholder="Your operations"
                /> */}
            </DivLogs >

        )
    }
}