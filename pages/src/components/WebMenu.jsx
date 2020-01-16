import React, {Navbar} from 'react';
import {
  Container
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
  }
  
  `}
  </style>
)


const WebMenu = props => {

  return (
    <div>
      <InlineStyle />
  
        <Container>
            <div className="ui fixed inverted menu" style={{backgroundColor: '#ffa845'}}>
            <div className="ui container">
                <a href="#" className="header item">UNIVATE</a>
                <a href="#" className="item">Home</a>
            </div>
            </div>
        </Container>


  </div>
  );
};

export default WebMenu;
