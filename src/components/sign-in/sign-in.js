import React, { Component } from 'react';
import { render } from 'react-dom';
import Nav from '../Nav/Nav';
class Signin extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };
    render () {
        return (
            <>
            {/* <Nav/> */}
                <form>
                    <input name="email"
                        type="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Email</label>

                    <input name="password"
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange} required />
                    <label>Password</label>

                    <button className="btn btn-primary">click</button>

                </form>
            </>
        );
    }
}

export default Signin;