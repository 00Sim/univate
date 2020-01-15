import React from 'react';
import LineChart from './LineChart';
import {
  Container,
  Grid,
  Header,
  Text,
  GridRow
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
  const {sampleEvents} = props;
  const {
    user_profile_photo
  } = sampleEvents;

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
  return (
    <div>
      <InlineStyle />
  
    <Container>
    

    <div className="ui fixed inverted menu" style={{backgroundColor: '#799bf2'}}>
      <div className="ui container">
        <a href="#" className="header item">UNIVATE</a>
        <a href="#" className="item">Home</a>

      </div>
    </div>
  

    <Grid style={mainBody}>
      <Grid.Row style={banner}>
        <Grid.Column width={3}>
        <div className="profile" >
          <img style={profilePic} src="https://images.squarespace-cdn.com/content/555b5cf1e4b0864ccf1a0156/1468955257499-HU0LFLHSHTDECF0SW7VY/FRN+Logo.png?content-type=image%2Fpng"/>
       </div>
        </Grid.Column>
        <Grid.Column width={13}>
          <Header as='h1' style={{margin_top:'10rem'}}>UM Food Recovery Network</Header>
          <p><strong> Mission: </strong>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p> 

          <p>Website: https://api.adorable.io/avatars/64/3</p>

          <div class="ui red button">
            <i class="mail icon"></i> Email
          </div>

          <button class="ui facebook button">
            <i class="facebook icon"></i>
            Facebook
          </button>
          <button class="ui twitter button">
            <i class="twitter icon"></i>
            Twitter
          </button>
        </Grid.Column>
        
      <div class="ui divider"></div>
      </Grid.Row>
      <Grid.Row>
      <Header as='h3'>Avg Attendance by Month</Header>
      </Grid.Row>

      <GridRow>
      <LineChart height="275"></LineChart>
      </GridRow>
      
    </Grid>
  </Container>

  </div>
  );
};

export default OrgDash;
