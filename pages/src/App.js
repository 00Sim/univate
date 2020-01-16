import React, { Component } from 'react';
import './App.css';

// import Home from './components/Home';
import org from './components/Home';
import ExpandedEvent from './components/ExpandedEvent'
import sampleOrg from './content/sampleOrg'
import OrgDash from './components/OrgDash'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import Home from './components/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      selectedOrg: sampleOrg
    };
  }


  render() {
    return (

      <Router>
        <Route path="/home" component={Home}/>
      </Router>
      // <div className="container">
      //   <div>
      //     {/* Replace this to the react component you are working on */}
      //     <OrgDash selectedOrg={this.state.selectedOrg} />
      //     {/* <ExpandedEvent events={this.state.events} /> */}
      //     {/* <Home events={this.state.events} /> */}
      //   </div>
      // </div>
    );
  };
}

export default App;
