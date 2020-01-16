import React, {Navbar} from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Menu,
  Input
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
   .ui.menu {
    background: #f99820;
   }
  }
  
  `}
  </style>
)


const WebMenu = props => {

  return (
    <div>
      <InlineStyle />
  
        {/* <Container>
            <div className="ui fixed inverted menu" style={{backgroundColor: '#ffa845'}}>
            <div className="ui container">
                <a href="#" className="header item">UNIVATE</a>
                <Menu.Item as={Link} to='/home' />
                <a href="#" className="item">Home</a>
            </div>
            </div>
        </Container> */}
        {/* <Menu>
        <Menu.Item as={Link} to="/home">
          UNIVATE
        </Menu.Item>
        <Menu.Item as={Link} to="/dash">
          Your Profile
        </Menu.Item>
        </Menu> */}

        <Menu >
        <Menu.Item as={Link} to="/home">
          UNIVATE
        </Menu.Item>

        <Menu.Item
          name='messages'
        />
      
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item as={Link} to="/dash">
          Your Profile
        </Menu.Item>
        </Menu.Menu>
      </Menu>


  </div>
  );
};

export default WebMenu;
