import React from 'react';

const Search = props => {

  return (
    <div className="search-bar" >
      <form>
        <input type="text" placeholder="Search" onChange={this.filterList}></input>
      </form>

      <div>
        {
          props.events.map(function (event) {
            return <div key={event}>{event}</div>
          })
        }
      </div>
    </div>
  );
};

export default Search;
