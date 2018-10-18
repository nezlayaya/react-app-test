import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import  ListItem from './ListItem/ListItem';
import Header from './Header/Header'
import './App.css';
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password: '',
            showRegister: false,
            isLogin: false
        };
    }

    handleSubmit = (emailValue, passValue, showRegister) => {
        this.setState({
            email: emailValue,
            password: passValue,
            showRegister: showRegister
        });
    };

    ShowRegisterForm = (showFormRegistration)=>{
        this.setState({
            showRegister: showFormRegistration
        })
    };


  render() {
    return (
      <div className="App">
          <Header ShowRegister={this.ShowRegisterForm}/>
          { this.state.showRegister === true ?
              <RegistrationForm SubmitButton={this.handleSubmit}/>
              : ''
          }
          <ListItem/>
      </div>
    );
  }
}

export default App;
