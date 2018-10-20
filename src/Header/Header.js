import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isToggleOn: true,
            loginUser: false
        };
        this.ShowRegisterForm = this.ShowRegisterForm.bind(this);
    }

    ShowRegisterForm(){
        this.props.ShowRegister(this.state.isToggleOn);
    }

    render() {
        return (
            <header className='w3-container w3-teal'>
                <button onClick={this.ShowRegisterForm} className='login w3-button w3-white'>
                    {this.state.loginUser === false ?
                        'Login' : 'Logout'
                    }
                </button>
            </header>
        );
    }
}

export default Header;
