import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import withWidth from '@material-ui/core/withWidth';

const styles = {
  root: {
    flexGrow: 1,
    borderBottom: '1px solid #C7C7C7'
  }
};

class WTabs extends Component {
  state = {
    value: 'agenda'
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes, width } = this.props;
    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered={width !== 'xs'}
          scrollable={width === 'xs'}
        >
          <Tab label="Agenda" value="agenda"/>
          <Tab label="Schedule" value="schedule"/>
          <Tab label="Favorites" value="favourites"/>
          <Tab label="My Pass" value="pass"/>
        </Tabs>
      </div>
    );
  }
}

WTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default withStyles(styles)(withWidth()(WTabs));
