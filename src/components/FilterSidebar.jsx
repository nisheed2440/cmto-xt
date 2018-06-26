import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { actionToggleSidebar } from "../store/actions";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";
import SessionTag from "./SessionTag";

const styles = theme => ({
  root: {
    flexGrow: 1,
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
                  (12 RESULTS)
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
                    <Switch/>
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FilterSidebar));
