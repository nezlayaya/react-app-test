import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isToggleOn: true
        };
        this.ShowRegisterForm = this.ShowRegisterForm.bind(this);
    }

    ShowRegisterForm(){
        let buttonValue = this.refs.loginButton;
        this.setState({
            isToggleOn: true
        });
        this.props.ShowRegister(this.state.isToggleOn, buttonValue);
    }

    render() {
        return (
            <header className='w3-container w3-teal'>
                <button onClick={this.ShowRegisterForm} className='login w3-button w3-white' ref="loginButton">
                    Login
                </button>
            </header>
        );
    }
}

export default Header;
