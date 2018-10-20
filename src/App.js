import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Header from './Header/Header'
import Lists from './Lists/Lists'
import './App.css';
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password: '',
            showRegister: false,
            isUserLogin: false
        };
    }

    handleSubmit = (emailValue, passValue, showRegister,isUserLogin) => {
        this.setState({
            email: emailValue,
            password: passValue,
            showRegister: showRegister,
            isUserLogin: isUserLogin
        });
        console.log(this);
    };

    ShowRegisterForm = (showFormRegistration)=>{
        this.setState({
            showRegister: showFormRegistration
        })
    };

    updateData = (value) => {
        this.setState({ name: value })
    };


  render() {
    return (
      <div className="App">
          <Header ShowRegister={this.ShowRegisterForm}/>
          { this.state.showRegister === true ?
              <RegistrationForm SubmitButton={this.handleSubmit}/>
              : ''
          }
          <Lists updateData={this.updateData}/>
      </div>
    );
  }
}

export default App;
