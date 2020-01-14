import React, {Component} from 'react';
import './App.css';
import Feed from './components/Feed';
import tweets from './content/tweets.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tweets: tweets
    };
  }
  
  
  render() {
    return (
      <div className="container">
        <div>
          {/* Replace this to the react component you are working on */}
          <Feed tweets={this.state.tweets} /> 
        </div>
      </div>
    );
  };
  }

export default App;
