import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }


  render() {
    return (
      <div className="container">
        <div>
          {/* Replace this to the react component you are working on */}
          <Home events={this.state.events} />
        </div>
      </div>
    );
  };
}

export default App;
