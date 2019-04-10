import React from "react";

import { css } from "aphrodite/no-important";
import styles from './calcStyle';

export default class Logs extends React.Component {

    render() {
        return (
            <div className={css(styles.divLogs)}>
                <br />
                <p className={css(styles.logs)}>
                    <b>Logs:</b></p>
                <textarea
                    rows="35"
                    cols="50"
                    readOnly
                    value={this.props.logs}
                    placeholder="Your operations"
                    className={css(styles.textarea)}
                />
            </div>
        )
    }
}