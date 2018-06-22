// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import Checkbox from '@material-ui/core/Checkbox';

export const mailFolderListItems = (

    
  <div>
    <ListItem button>
      <ListItemText primary="Data Mining" />
      <Checkbox
          checked={false}
        //   onChange={this.handleChange('checkedB')}
          value="checkedB"
          color="primary"
        />
    </ListItem>
    <Divider />
    <ListItem button>
      
      <ListItemText primary="Artificial Intelligence" />
      <Checkbox
          checked={false}
        //   onChange={this.handleChange('checkedB')}
          value="checkedB"
          color="primary"
        />
    </ListItem>
    <Divider />
    <ListItem button>
     
      <ListItemText primary="Front end optimization" />
      <Checkbox
          checked={false}
        //   onChange={this.handleChange('checkedB')}
          value="checkedB"
          color="primary"
        />
    </ListItem>
    <Divider />
    <ListItem button>
      
      <ListItemText primary="Internet of things" />
    </ListItem>
    <Divider />
    <ListItem button>
     
      <ListItemText primary="React" />
      <Checkbox
          checked={false}
        //   onChange={this.handleChange('checkedB')}
          value="checkedB"
          color="primary"
        />
    </ListItem>
    <Divider />
    <ListItem button>
      
      <ListItemText primary="Node applications" />
      <Checkbox
          checked={false}
        //   onChange={this.handleChange('checkedB')}
          value="checkedB"
          color="primary"
        />
    </ListItem>
    <Divider />
    <ListItem button>
      
      <ListItemText primary="Deep learning" />
      <Checkbox
          checked={false}
        //   onChange={this.handleChange('checkedB')}
          value="checkedB"
          color="primary"
        />
    </ListItem>
    <Divider />
  </div>
);