import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Drawer from "@material-ui/core/Drawer";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { actionToggleSidebar } from "../store/actions";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import SessionTag from "./SessionTag";
import {
  actionUpdateScheduleInfo
} from "../store/actions";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    width: 250,
    backgroundColor: '#FFF'
  },
  flex: {
    flex: 1
  },
  close: {
    color: "#FFFFFF",
    marginRight: theme.spacing.unit
  },
  toolbar: {
    paddingLeft: theme.spacing.unit
  },
  list: {
    backgroundColor: theme.palette.background.paper,
  }
});

class FilterSidebar extends Component {

  closeSidebar = () => {
    const { toggleSidebar, sidebarOpen } = this.props;
    toggleSidebar(!sidebarOpen);
  };

  filterClick = (event) => {
    // console.log(labelVal);
    let targetElem = event.target;
    let label = targetElem.value;
    let filterData = [];
    let selectedFilters = [];
    const { updateData } = this.props;
    Promise.resolve(this.fetchSessions()).then(modules => {
      modules.data.map(data => {
        if( data.topics.length ) {
          let topicData = data.topics;
          topicData.map(topic => {
            if( topic.label === label) {
              filterData.push(data);
            }
          });
        }
      }); 
      selectedFilters.push(label);
      localStorage.setItem("selectedFilters", JSON.stringify(selectedFilters));
      updateData(filterData);
    });
  };

  setCheckboxState = (event) => {
    let checkboxSelected = localStorage.getItem('selectedFilters') ? JSON.parse(localStorage.getItem('selectedFilters')) : [];
    if( checkboxSelected.length ) {
      console.log(event);
      if( checkboxSelected.indexOf(event.target.value) > -1 ) {
        return true;
      }
    }
    else {
      return false;
    }
  };

  fetchSessions = () => {
    return axios.get("http://localhost/wordpress/wp-json/cmto/v1/sessions").catch(err => {
      console.log(err);
    });
  };

  render() {
    const { classes, sidebarOpen, filters } = this.props;
    return (
      <Drawer anchor={"right"} open={sidebarOpen} onClose={this.closeSidebar}>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <AppBar position="static" elevation={0}>
              <Toolbar className={classes.toolbar}>
                <IconButton
                  className={classes.close}
                  onClick={this.closeSidebar}
                >
                  <Icon>close</Icon>
                </IconButton>
                <Typography
                  variant="title"
                  color="inherit"
                  className={classes.flex}
                >
                  Filter
                </Typography>
                <Typography variant="caption" color="inherit">
                  
                </Typography>
              </Toolbar>
            </AppBar>
            <List
              subheader={
                <ListSubheader component="li">Session Topics</ListSubheader>
              }
              className={classes.list}
            >
              {filters.map(filter => (
                <ListItem
                  key={filter.id}
                  role={undefined}
                  className={classes.listItem}
                  divider
                >
                  <ListItemText primary={<SessionTag key={filter.id} label={filter.label} color={filter.color || ''}/>} />
                  <ListItemSecondaryAction>
                  <Checkbox
                    onChange={this.filterClick}
                    value={filter.label}
                    color='primary'
                  />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Drawer>
    );
  }
}

FilterSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  sidebarOpen: state.sidebar.isOpen,
  filters: state.sessions.filters
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: isOpen => {
    dispatch(actionToggleSidebar(isOpen));
  },
  updateData: data => {
    dispatch(actionUpdateScheduleInfo(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FilterSidebar));
