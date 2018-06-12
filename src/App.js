import React, { Component } from 'react';
import logo from './logo.svg';
import InputMask from 'react-input-mask'
import './App.css';

class App extends Component {

  updateInputValue = (e) => {
    this.phone_number = e.target.value
    if (this.phone_number.length !== 13) {
      this.setState({validPhoneNumber: false})
    } else {
      this.setState({validPhoneNumber: true})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <InputMask className='search-term'
          title='Phone Number'
          mask='(999)999-9999'
          maskChar='' //https://www.npmjs.com/package/react-input-mask#maskchar--string
          placeholder='(###)###-####'
          onChange={this.updateInputValue}
          minLength="13"
          required
        />
      </div>
    );
  }
}

export default App;
