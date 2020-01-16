import React from "react";
import {Grid,Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Event = props => {
  return (

    <div class="ui card">
      <div class="image" >
        {<img className="event_image" alt="" src={`${props.event.event_photo}`} />}
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
        
      <Grid.Column >
        <a>
          <i class="user icon"></i>
          {`${props.event.organization_name}`}
        </a>
      </Grid.Column>
       <Grid.Column>
       <Button as={Link} to="/event">>
         More Info
       </Button>   
       </Grid.Column>
        <Grid>
          
        </Grid>
        <br />
        

      </div>

    </div>


  );
};

export default Event;