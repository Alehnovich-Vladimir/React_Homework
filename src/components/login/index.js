import React, { Component } from 'react';
import './index.css';

class Login extends Component {

    state = {
        phone: '',
        password: '',
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.password.length === 2 && this.state.password.length === 3) {
            this.onSubmit();
        }
    }

    onSubmit = () => {
        fetch("http://localhost:3004/users", {
            method: 'POST',
            body: JSON.stringify({
                phone: this.state.phone,
                password: this.state.password,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

    onChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    onReset = () => {
        this.setState({ phone: '', password: '' });
    }

    // +375291234563

    render() {
        return (
            <div className="page">
                <input
                    type="text"
                    onChange={(event) => this.setState({ phone: event.target.value })}
                    placeholder='phone'
                    value={this.state.phone}
                />
                <input
                    type="password"
                    onChange={this.onChangePassword}
                    placeholder='password'
                    value={this.state.password}
                />
                <button onClick={this.onReset}>Reset</button>
            </div>
        )
    }
}

export default Login