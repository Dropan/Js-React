import React from "react";

export default class StringList extends React.Component
{
    constructor(props)
    {
        super();

        this.onClick = this.onClick.bind(this);

        this.state = {
            items: props.items
        }
    }

    onClick()
    {
        this.setState({
            items: this.state.items.map(e => e.split("").reverse().join(""))
        })
    }

    render()
    {
        return <div>
            {this.state.items.map(e => <div key={e}>{e}</div>)}
            <button onClick={this.onClick}>Reverse</button>
        </div>
    }
}