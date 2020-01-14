import React from 'react';


const Tweet = props => {
  return (
    <div className="tweet-card flex-row">
      <div className="userInfo">
        <div className="profile-photo">{/* profile photo */<img src={`${props.tweet.user_profile_photo}`}/> }</div>
        <div className="username"> {`${props.tweet.username}`} </div>
        <div className="user_displayname"> {`${props.tweet.user_displayname}`} </div>
      </div>
      
      
      <div className="content">
        {
          `${props.tweet.content}`
          /*
            other content. hint:
            - div for user info
            - div for content
            - div for displaying likes. use and style color <i class="fas fa-heart"></i>
          */}
      </div>
      <div>
      {props.tweet.is_liked ? <span><i className="fa fa-heart liked"></i> <span>{`${props.tweet.likes}`}</span></span> : <i className="fa fa-heart"></i>}
      </div>
      
    </div>
  );
};

export default Tweet;