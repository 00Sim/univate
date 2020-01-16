import React, { Component } from 'react';
import './App.css';

// import Home from './components/Home';
import org from './components/Home';
import ExpandedEvent from './components/ExpandedEvent'
import sampleOrg from './content/sampleOrg'
import sampleEvents from './content/sampleEvents'
import OrgDash from './components/OrgDash'
import Form from './components/Form'
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
      events: sampleEvents,
      selectedOrg: sampleOrg
    };
  }


  render() {
    return (

      <Router>
        <Route path="/home" component={Home}/>
        <Route
        path='/dash'
        render={(props) => <OrgDash {...props} selectedOrg={this.state.selectedOrg} events={this.state.events}/>}
      />
      <Route
        path='/event'
        render={(props) => <ExpandedEvent {...props} events={this.state.events} />}
      />

      <Route
        path='/form'
        render={(props) => <Form />}
      />
      </
      Router>
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
