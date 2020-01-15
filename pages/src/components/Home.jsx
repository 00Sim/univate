import React, { Component } from 'react';
import Search from './Search';
import sampleEvents from '../content/sampleEvents.json';


class Home extends Component {

  constructor() {
    super();
    this.state = {
      events: sampleEvents,
      results: []
    };
  }

  componentWillMount = () => {
    this.setState({
      results: []
    })
  }

  filterEvent = (event) => {
    var items = this.state.events;
    items = items.filter((item) => {
      return item.event_name.toLowerCase().indexOf(
        event.target.value.toLowerCase()) !== -1
    });
    this.setState({ results: items });
  }


  render() {
    return (
      <div className="home-card" >
        <div className="search-bar" >
          <form>
            <input type="text" placeholder="Search" onChange={this.filterEvent}></input>
          </form>

        </div>
        <div className="results">
          {
            this.state.results.map(event => {
              return <div key={event.id}>{event.event_name}</div>
            })
          }
        </div>
      </div>
    );
  }


};

export default Home;
