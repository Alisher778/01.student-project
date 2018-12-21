import React, { Component } from 'react';
import Context from './Context';
import Child from './Child';
import './App.css';

class App extends Component {
  render() {
    return (
      <Context.Provider value={'Hello'} className="App">
          <h1>Hello React</h1>
          <Child />
      </Context.Provider>
    );
  }
}

export default App;
