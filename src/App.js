import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import  ListItem from './ListItem/ListItem'
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password: '',
            showRegister: true
        };
    }

    handleSubmit = (emailValue, passValue, showRegister) => {
        this.setState({
            email: emailValue,
            password: passValue,
            showRegister: showRegister
        });
    };

  render() {
    return (
      <div className="App">
          { this.state.showRegister === true ?
              <RegistrationForm SubmitButton={this.handleSubmit}/>
              : <ListItem />
          }
      </div>
    );
  }
}

export default App;
