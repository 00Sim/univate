import React from 'react';
import Tweet from './Tweet';

const Feed = props => {
  return (
    <div className="tweet-card">
      <div>Home</div>
        {
          props.tweets.map(tweet => (
          <Tweet tweet={tweet} key={tweet.id} />
          ))
        }
        
         </div>
  );
};

export default Feed;
