import React from "react";

import Logs from './Logs';
import Calculate from './Calculate';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logs: [],
            indicatorParent: true
        }
        this.onEqualsClick = this.onEqualsClick.bind(this);
    }

    onEqualsClick(logs, indicatorCalc) {
        this.setState({
            logs: this.state.logs.concat(logs),
            indicatorParent: this.state.indicatorParent = indicatorCalc
        })
    }
    render() {
        return (
            <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={1000} transitionEnter={false} transitionLeave={false}>
                <Calculate onEqualsClick={this.onEqualsClick} />
                <Logs indicatorParent={this.state.indicatorParent} logs={this.state.logs} />
            </ReactCSSTransitionGroup>
        )
    }
}