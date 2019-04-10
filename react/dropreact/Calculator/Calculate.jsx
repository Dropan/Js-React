import React from "react";

import styled from 'styled-components';

const DivCalc = styled.div`
    background: #9ACD32;
`;

const DivCalcElements = styled.p`
    margin-left: 33%;
`;

const Input = styled.input`
    height: 21px;
    border: 1px solid;
    border-Color: #9ACD32;
    background: #F5F5DC;
    text-align: center;
    color: #9ACD32;
    font-size: large;
`;

const Select = styled.select`
    height: 25px;
    border: 1px solid;
    border-color: #9ACD32;
    background: #F5F5DC;
    text-align: center;
    font-size: large;
    color: #9ACD32;
`;

const Button = styled.button`
    height: 28px;
    border: 2px outset;
    border-color: #9ACD32;
    background: #F5F5DC;
    font-size: large;
    color: #9ACD32;
`;

const Label = styled.label`
    color: #F5F5DC;
    font-size: large;
`;

export default class Calculate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: 0,
            input2: 0,
            select: '0',
            result: 0,
            count: 0,
        };
        this.Input1Change = this.Input1Change.bind(this);
        this.Input2Change = this.Input2Change.bind(this);
        this.SelectChange = this.SelectChange.bind(this);
        this.ResultValue = this.ResultValue.bind(this);
    }

    ResultValue() {
        this.state.count++;
        switch (this.state.select) {
            case '+':
                return this.props.onEqualsClick({ count: this.state.count, input1: this.state.input1, selelct: this.state.select, input2: this.state.input2, result: this.state.result = Number(this.state.input1) + Number(this.state.input2) })
            case '-':
                return this.props.onEqualsClick({ count: this.state.count, input1: this.state.input1, selelct: this.state.select, input2: this.state.input2, result: this.state.result = Number(this.state.input1) - Number(this.state.input2) })
            case '*':
                return this.props.onEqualsClick({ count: this.state.count, input1: this.state.input1, selelct: this.state.select, input2: this.state.input2, result: this.state.result = Number(this.state.input1) * Number(this.state.input2) })
            case '/':
                return this.props.onEqualsClick({ count: this.state.count, input1: this.state.input1, selelct: this.state.select, input2: this.state.input2, result: this.state.result = Number(this.state.input1) / Number(this.state.input2) })
            case '0':
                return alert('Select operator');
            default:
                break;
        }
    }

    Input1Change(event) {
        this.setState({ input1: event.target.value });
    }

    Input2Change(event) {
        this.setState({ input2: event.target.value });
    }

    SelectChange(event) {
        this.setState({ select: event.target.value });
    }

    render() {
        return (
            <DivCalc ><br />
                <DivCalcElements>
                    <Input
                        type="number"
                        placeholder="Enter 1st value"
                        onChange={this.Input1Change}
                    />
                    <Select value={this.state.select} onChange={this.SelectChange} >
                        <option value='0'>Select</option>
                        <option value='+'>+</option>
                        <option value='-'>-</option>
                        <option value='*'>*</option>
                        <option value='/'>/</option>
                    </Select>
                    <Input
                        type="number"
                        placeholder="Enter 2nd value"
                        onChange={this.Input2Change}
                    />
                    <Button onClick={this.ResultValue} > Сalculate </Button>
                    <Label ><b>Result = {this.state.result}</b></Label>
                </DivCalcElements>
                <br />
            </DivCalc>
        )
    }
}



