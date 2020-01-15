import React from "react";
import Organizer from "./Organizer"
import { FontAwesomeIcon } from '@fortawesome/react_fontawesome'

const Event = props => {
  return (
    <div className="event_card">
      <div className="photo"> {<img src={`${props.event.event_photo}`} />}</div>
      <hr />

      <div className="information">
        <div className="event_title">{`${props.event.title}`}</div>

        <div className="organization_name">{`${props.event.cause}`}</div>

        <br/>

        <div className="date"> <FontAwesomeIcon icon="check_square" /> {`${props.event.date}`}</div>

        <br/>

        <div className="college">{`${props.event.college}`}</div>

        <br/>

        <div className="description">{`${props.event.description}`}</div>

        <br/>

        {props.event.organizer.map(organizer => (
          <Organizer organizer={organizer} key={organizer.id} />
        ))
        }



      </div>
    </div>
  );
};

export default Event;
