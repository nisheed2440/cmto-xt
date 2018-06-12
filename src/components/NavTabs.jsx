import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MUITabs from "@material-ui/core/Tabs";
import MUITab from "@material-ui/core/Tab";
import withWidth from '@material-ui/core/withWidth';
import {withRouter} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  }
};

class NavTabs extends Component {
  state = {
    value: 'agenda'
  };

  handleChange = (event, value) => {
    const {history} = this.props;
    this.setState({ value });
    history.push(`/home/${value}`);
  };
  render() {
    const { classes, width, history } = this.props;
    return (
      <div className={classes.root}>
        <MUITabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered={width !== 'xs'}
          scrollable={width === 'xs'}
        >
          <MUITab label="Agenda" value="agenda"/>
          <MUITab label="Schedule" value="schedule"/>
          <MUITab label="Favorites" value="favourites"/>
          <MUITab label="My Pass" value="pass"/>
        </MUITabs>
      </div>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(withWidth()(withRouter(NavTabs)));
