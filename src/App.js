import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Header from './Header/Header'
import Lists from './Lists/Lists'
import './App.css';
import ListItem from "./ListItem/ListItem";

let liNumber;
let buttonValue;
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password: '',
            showRegister: false,
            isUserLogin: false,
            isLoad: false,
            buttonValue: '',
            flagLogin: false
        };
    }

    handleSubmit = (emailValue, passValue, showRegister,isUserLogin) => {
        this.setState({
            email: emailValue,
            password: passValue,
            showRegister: showRegister,
            isUserLogin: isUserLogin
        });
    };

    ShowRegisterForm = (showFormRegistration, value)=>{
        this.setState({
            showRegister: showFormRegistration,
            buttonValue: value
        });
    };

    NumberOfLi = (value) => {
        liNumber = value;
        this.setState({
           isLoad:true
        });
    };

  render() {
    return (
      <div className="App">
          <Header
              ShowRegister={this.ShowRegisterForm}
              isUserLogin={this.state.isUserLogin}
          />
          { this.state.showRegister === true ?
              <RegistrationForm SubmitButton={this.handleSubmit}/>
              : ''
          }
          <div className="lists-wrapper">
              <Lists updateData={this.NumberOfLi}/>
              <ListItem
                  numberOfLi={liNumber}
                  isLogin={this.state.isUserLogin}
                  showRegister={this.state.showRegister}
                  valueButtonLogin={this.state.buttonValue.innerHTML}
              />
          </div>
      </div>
    );
  }
}

export default App;
