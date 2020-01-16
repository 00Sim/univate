import React from "react";
import Event from "./Event";
import WebMenu from "./WebMenu"
import Organizer from "./Organizer";
import {
  Container,
  Grid,
  Header
} from 'semantic-ui-react'

const InlineStyle = () => (
  
  <style>
    {`
    .grid {
      position: relative;
    }
    .grid:before {
      content: '';
      height: calc(100% - 2rem);
      left: 1rem;
      top: 1rem;
      position: absolute;
      width: calc(100%);
     }
    .ui.divided.grid:before, .celled.grid:before {
      display: none;
    }
    .ui.aligned .column:after {
      display: none !important;
    }

    .ui.header:first-child {
      margin-top: -.25em;
   }
    h1.ui.header {
      font-size: rem;
    }
    td {
      padding:40px;
    }
    }
  
  `}
  </style>
)


const ExpandedEvent = props => {


  var mainBody = {
    margin: '35px',
  }
  var banner = {
    paddingTop: '6rem',
    paddingBottom: '2rem',
    top: '50%',
    display: 'inline-block',
  };

  var profilePic = {
      border: '3px solid ',
      border_radius: '20%',
      margin_left: 'auto',
      margin_right: 'auto',
      width: '115px',
      height: '115px'
  }
  const thisEvent = props.events[0];

  return (
    <div className="event-card">
      
      <div>
      <InlineStyle />
  
    <Container>
    

    <WebMenu></WebMenu>
  

    <Grid style={mainBody}>
      <Grid.Row style={banner}>
        <div  >
          <img className="ui centered medium image" alt="" src="https://images.squarespace-cdn.com/content/555b5cf1e4b0864ccf1a0156/1468955257499-HU0LFLHSHTDECF0SW7VY/FRN+Logo.png?content-type=image%2Fpng"/>
       </div>
        
          <Header as='h1' style={{margin_top:'10rem'}}>UM Food Recovery Network</Header>
          <h3>
          <i class="users icon"></i> 
           {`${thisEvent.organization_name}`}
        </h3>
        <br/>
          <p><h3> Mission: </h3>
          {`${thisEvent.description}`}
          </p> 

          <p> <h3> Website: </h3>
            https://api.adorable.io/avatars/64/3</p>

  
        
        
      
      
      <div class="content">
        
        <div class="meta">
          <span class="date">
          <h3> Date: </h3>
            <i class="calendar icon"></i> {`${thisEvent.date}`}
          </span>
        </div>

      </div>
      <div class="extra content">
        
        
      </div>
      
   
        <h3 class="ui header">Organizers:</h3>
        {thisEvent.organizer.map(organizer => (
          <Organizer organizer={organizer} key={organizer.id} />
        ))}
      <h2 class="ui header"> Similar Events</h2>
      <table>
        <tr>
          <td>
            <Event event={props.events[0]} key={props.events[0].id} />
          </td>
          
          <td>
            <Event event={props.events[1]} key={props.events[1].id} />
          </td>
          
          <td>
            <Event event={props.events[2]} key={props.events[2].id} />
          </td>
        </tr>
      </table>

      
      <div class="ui divider"></div>
      </Grid.Row>
      

      
    </Grid>
  </Container>

  </div>
    </div>
  );
};

export default ExpandedEvent;
