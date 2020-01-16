import React, { Component } from 'react';
import Search from './Search';
import sampleEvents from '../content/sampleEvents.json';


class Home extends Component {

  constructor() {
    super();
    this.state = {
      events: sampleEvents,
      searchText: '',
      results: []
    };
  }

  componentWillMount = () => {
    this.setState({
      results: [],
      searchText: ''
    })
  }

  search = (text) => {
    this.setState({
      searchText: text.target.value
    })
  }

  filterSearch = () => {
    var items = this.state.events;
    items = items.filter((item) => {
      return item.event_name.toLowerCase().indexOf(
        this.state.searchText.toLowerCase()) !== -1
    });
    this.setState({ results: items });
  }

  render() {
    return (
      <div className="home-card" >
        <div className="search-bar" >
          <form>
            <input type="text" placeholder="Search" onChange={this.search}></input>
          </form>
          <button onClick={this.filterSearch}> Find Events</button>

        </div>
        <div className="results">
          {
            this.state.results.length !== 0 ?
              this.state.results.map(event => {
                return <div key={event.id}>{event.event_name}</div>
              }) :
              <div> No events match your search. </div>
          }
        </div>
      </div>
    );
  }


};

export default Home;
