import React, { Component } from 'react';

class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            showRegister: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let email = this.state.email;
        let pass = this.state.password;
        let showRegister = this.state.showRegister;
        if(this.state.email === 'test@gmail.com' && this.state.password === '12345'){
            this.setState({
                showRegister: false
            })
        }
        this.props.SubmitButton(email,pass, showRegister);
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
            <div className="Registration-wrapper">
                <form className="form-container" onSubmit={this.handleSubmit}>
                    <input type="email"
                           placeholder='Email'
                           value={this.state.email}
                           onChange={this.handleEmailChange}
                    />
                    <input type="password"
                           placeholder='Password'
                           value={this.state.password}
                           onChange={this.passwordChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;
