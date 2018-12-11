import React, { Component } from 'react';
import Context from './Context';
import './App.css';

const MyContect = React.createContext('hey')
class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Hello React</h1>
          <Context />
      </div>
    );
  }
}

export default App;
