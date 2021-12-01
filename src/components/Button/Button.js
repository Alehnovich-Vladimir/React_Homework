import React, { Component } from 'react';
import './index.css';

class Button extends Component {
    state = {
        title: "✖️"
    }

    onButtonClick = (newTitle) => {
        this.setState({title: newTitle})
    }

    render() {
        return (
            <div className="checkbox" onClick={() => this.onButtonClick(this.state.title === "✖️" ? "✔️" : "✖️")}>{ this.state.title}</div>
        )
    }
}

export default Button


