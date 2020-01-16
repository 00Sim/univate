import React from "react";


const Event = props => {
  return (
   
    <div class="ui card">
    <div class="image" >
    {<img  class="event_image" alt=""  src={`${props.event.event_photo}`} />}
      </div>
    <div class="content">
      <h1 class="ui header">{`${props.event.cause}`}</h1>
      <div class="meta">
        <span class="date"><i class="calendar icon"></i> {`${props.event.date}`}</span>
      </div>
      <div class="description"> 
      {`${props.event.description}`}
      </div>
    </div>
    <div class="extra content">
      <a>
        <i class="user icon"></i>
        {`${props.event.organization_name}`}
      </a>
      <br/>
      
    </div>
 
      </div>
   
     
  );
};

export default Event;
