import React from "react";

const Organizer = props => {
  return (
    <div className="organizer-card">
      <div className="name"> {`${props.organizer.name}`}</div>

      <div className="contact">{`${props.organizer.contact}`}</div>

      <div className="graduation">{`${props.organizer.graduate}`}</div>
    </div>
  );
};

export default Organizer;
