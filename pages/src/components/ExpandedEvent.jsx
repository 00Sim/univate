import React from "react";
import Event from "./Event";

//replace 0 with props.key

const ExpandedEvent = props => {
  return (
    <div className="event-card">
      
      <Event event={props.events[0]} key={props.events[0].id} />
    </div>
  );
};

export default ExpandedEvent;
