import React, { Component } from 'react';
import './index.css';

class sayHi extends Component {
    state = {
        loading: false,
        greeting: ""
    };

    sayHi = () => {
        this.setState({ loading: false, greeting: "Hello!!!" });
    };

    runLoader = () => {
        setTimeout(this.sayHi, 3000);
        this.setState({ loading: true });
    };

    render() {
        return (
            <>
                <button onClick={this.runLoader}>Say Hi</button>
                {this.state.loading && <div className="loader"></div>}
                <span>{this.state.greeting}</span>
            </>
        );
    }
    
}

export default sayHi