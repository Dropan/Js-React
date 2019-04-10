import React from "react";

import Logs from './Logs';
import Calculate from './Calculate';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logs: [],
        }
        this.onEqualsClick = this.onEqualsClick.bind(this);
    }

    onEqualsClick(logs) {
        this.setState({
            logs: this.state.logs.concat(logs),
        })
    }
    render() {
        return (
            <ReactCSSTransitionGroup transitionName="anima" transitionAppear={true} transitionAppearTimeout={1000} transitionEnter={false} transitionLeave={false}>
                <Calculate onEqualsClick={this.onEqualsClick} />
                <Logs indicatorParent={this.state.indicatorParent} logs={this.state.logs} />
            </ReactCSSTransitionGroup>
        )
    }
}