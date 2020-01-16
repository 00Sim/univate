import React from 'react';
import LineChart from './LineChart';
import WebMenu from './WebMenu';
import Event from './Event';
import { Link } from 'react-router-dom';

// import EventForm from './EventForm';

import {
  Container,
  Grid,
  Header,
  Text,
  GridRow,
  Image,
  Button
} from 'semantic-ui-react'

class OrgDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creatingEvent: false
    };
  }

render(props){

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
    }
  
    .ui.card .image img {
      object-fit: cover;
      height:150px;
    }

    .ui.divider {
      margin: 3rem;
    }
  `}
  </style>
)

  const {selectedOrg, events} = this.props;
  const {
    organization_name,
    organization_photo,
    organization_mission,
    website
  } = selectedOrg;

  var mainBody = {
    margin: '35px',
  }
  var banner = {
    paddingTop: '3rem',
    paddingBottom: '2rem',
    top: '50%',
    display: 'inline-block',
  };

  var profilePic = {
      border: '3px solid ',
      margin_left: 'auto',
      margin_right: 'auto',
      width: '115px',
      height: '115px'
  }

 

  return (
    <div>
      <InlineStyle />
  
    <Container>
    

    <WebMenu></WebMenu>

    <Grid style={mainBody}>
      
      <Grid.Row style={banner}>
        <Grid.Column width={3}>
        <div className="profile" >
          <img className="ui centered rounded image"   style={profilePic} src={organization_photo} />
       </div>
        </Grid.Column>
        <Grid.Column width={13}>
           <Header as='h1' style={{margin_top:'10rem'}}> {organization_name}</Header>
          <p><strong> Mission: </strong>
           {organization_mission}
          </p> 

          <p>Website: {website}</p>

          <div className="ui red button">
            <i className="mail icon"></i> Email
          </div>

          <button className="ui facebook button">
            <i className="facebook icon"></i>
            Facebook
          </button>
          <button className="ui twitter button">
            <i className="twitter icon"></i>
            Twitter
          </button>
        </Grid.Column>
        
      <div className="ui divider"></div>
      

      
      
    <Grid>
      <GridRow>
      <Grid.Column floated='left' width={6}>
      <Header as='h1' > Your Upcoming Events</Header>
        </Grid.Column>
       <Grid.Column floated='right' width={3}>
       <Button as={Link} to="/form">>
         Create Event
       </Button>   
       </Grid.Column>
       
         
      </GridRow>
    
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column><Event event={events[0]} key={events[0].id} /></Grid.Column>
          <Grid.Column><Event event={events[0]} key={events[0].id} /></Grid.Column>
          <Grid.Column><Event event={events[0]} key={events[0].id} /></Grid.Column>
          <Grid.Column><Event event={events[0]} key={events[0].id} /></Grid.Column>

        </Grid.Row>
       

      </Grid>
    </Grid>
      

      </Grid.Row>
      
      <Grid.Row>
      <Header as='h3'>Avg Attendance by Month</Header>
      </Grid.Row>

      <GridRow>
      <LineChart height="275"></LineChart>
      </GridRow>
      
    </Grid>
    {/* <GridRow>
      <EventForm/>
    </GridRow> */}
      
    

  </Container>

  </div>
  );
};
}

export default OrgDash;
