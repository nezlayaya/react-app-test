import React, { Component } from 'react';

class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            showRegister: false,
            isUserLogin: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    handleSubmit(){
        let email = this.state.email;
        let pass = this.state.password;
        let showRegister = this.state.showRegister;
        let isUserLogin = this.state.isUserLogin;
        this.props.SubmitButton(email,pass, showRegister, isUserLogin);
    }

    handleEmailChange(event){
        this.setState({
            email: event.target.value
        })
    }

    passwordChange(event){
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <div className="registration-wrapper">
                <form className="form-container w3-container" onSubmit={this.handleSubmit}>
                    <div>
                        <label className="w3-text-teal"><b>Email</b></label>
                        <input type="text"
                               className='w3-input w3-border w3-light-grey'
                               value={this.state.email}
                               onChange={this.handleEmailChange}
                        />
                    </div>
                    <div>
                        <label className="w3-text-teal"><b>Password</b></label>
                        <input type="password"
                               className="w3-input w3-border w3-light-grey"
                               value={this.state.password}
                               onChange={this.passwordChange}
                        />
                    </div>
                    <button className='w3-btn w3-padding w3-teal w3-margin-top'>Submit</button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;
