import React from 'react';
import LineChart from './LineChart';
import WebMenu from './WebMenu';
// import EventForm from './EventForm';

import {
  Container,
  Grid,
  Header,
  Text,
  GridRow,
  Image
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
    }
  
  `}
  </style>
)


const OrgDash = props => {
  const {selectedOrg} = props;
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

    
  function myFunction(x) {
    if (x.matches) { // If media query matches
      profilePic.width = '50px';
      profilePic.height = '50px';
    } 
  }

  var x = window.matchMedia("(max-width: 700px)")

  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes 

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

export default OrgDash;
