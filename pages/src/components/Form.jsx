import React from 'react';
import {Grid} from 'semantic-ui-react'
import form from './create.png'; // Tell Webpack this JS file uses this image

const Form = props => {
 
  return(
    <Grid centered columns={2}>
        <img src={form} alt="form"/>

      </Grid>
     
  )
};

export default Form;

