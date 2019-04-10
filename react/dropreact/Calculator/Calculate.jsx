import React from "react";

import { css } from "aphrodite/no-important";
import styles from './calcStyle';
import Logs from './Logs';

export default class Calculate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            in1: 0,
            in2: 0,
            sel: '0',
            res: ' ',
            logs: '',
            count: 0
        };
        this.Input1Change = this.Input1Change.bind(this);
        this.Input2Change = this.Input2Change.bind(this);
        this.SelectChange = this.SelectChange.bind(this);
        this.ResultValue = this.ResultValue.bind(this);
    }

    ResultValue() {
        this.state.count++;
        switch (this.state.sel) {
            case '+':
                return (this.setState({
                    res: this.state.res = Number(this.state.in1) + Number(this.state.in2),
                    logs: this.state.logs.concat(this.state.count + ')\t' + this.state.in1 + ' + ' + this.state.in2 + ' = ' + this.state.res + '\n'),
                }));
            case '-':
                return (this.setState({
                    res: this.state.res = Number(this.state.in1) - Number(this.state.in2),
                    logs: this.state.logs.concat(this.state.count + ')\t' + this.state.in1 + ' - ' + this.state.in2 + ' = ' + this.state.res + '\n')
                }));
            case '*':
                return (this.setState({
                    res: this.state.res = Number(this.state.in1) * Number(this.state.in2),
                    logs: this.state.logs.concat(this.state.count + ')\t' + this.state.in1 + ' * ' + this.state.in2 + ' = ' + this.state.res + '\n')
                }));
            case '/':
                return (this.setState({
                    res: this.state.res = Number(this.state.in1) / Number(this.state.in2),
                    logs: this.state.logs.concat(this.state.count + ')\t' + this.state.in1 + ' / ' + this.state.in2 + ' = ' + this.state.res + '\n')
                }));
            case '0':
                return alert('Select operator');
            default:
                break;
        }
    }

    Input1Change(event) {
        this.setState({ in1: event.target.value });
    }

    Input2Change(event) {
        this.setState({ in2: event.target.value });
    }

    SelectChange(event) {
        this.setState({ sel: event.target.value });
    }

    render() {
        return (
            <div>
                <div className={css(styles.divCalc)}><br />
                    <p className={css(styles.elements)}>
                        <input
                            autoFocus
                            type="number"
                            placeholder="Enter 1st value"
                            onChange={this.Input1Change}
                            className={css(styles.inp)}
                        />
                        <select value={this.state.sel} onChange={this.SelectChange} className={css(styles.sel)}>
                            <option className={css(styles.sel)} value='0'>Select</option>
                            <option className={css(styles.sel)} value='+'>+</option>
                            <option className={css(styles.sel)} value='-'>-</option>
                            <option className={css(styles.sel)} value='*'>*</option>
                            <option className={css(styles.sel)} value='/'>/</option>
                        </select>
                        <input
                            type="number"
                            placeholder="Enter 2nd value"
                            onChange={this.Input2Change}
                            className={css(styles.inp)}
                        />
                        <button onClick={this.ResultValue} className={css(styles.but)}> Сalculate </button>
                        <label className={css(styles.lbl)}> Result = {this.state.res}</label>
                    </p>
                    <br />
                    <Logs logs={this.state.logs} />
                </div>
            </div >
        )
    }
}



