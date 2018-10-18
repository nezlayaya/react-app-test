import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isToggleOn: false,
            loginUser: false
        };
        this.ShowRegisterForm = this.ShowRegisterForm.bind(this);
    }

    ShowRegisterForm(){
        let showFormRegistration = this.state.isToggleOn;
        this.setState({
            isToggleOn: true
        });
        this.props.ShowRegister(showFormRegistration);
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
