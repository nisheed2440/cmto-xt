import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

import Grid from "@material-ui/core/Grid";
import defaultProfileIcon from '../images/default_avatar.png';
import ShowMoreModal from './ShowMoreModal';
import Filter from './Filter';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';


const styles = theme => ({
  ampm: {
    fontSize: 16,
    verticalAlign: "middle"
  },
  summary: {
    width: "100%",
    display: "flex",
    alignItems: "center"
  },
  time: {
    paddingRight: theme.spacing.unit * 3,
    borderRight: "1px solid #e6e6e6"
  },
  title: {
    flex: 1,
    paddingLeft: theme.spacing.unit * 3
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  disabled:{
      opacity: '1 !important'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  }
});

const imgStyle= {width: '50px',
    border : '1px',
    borderRadius: '25px'}

class Schedule extends Component {
  state = {
    expanded: null,
    showModal: false,
    filter : false
  };

  handleChange = panel => (event, expanded) => {
    this.props.getSessionDetails();
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  sideList = () => {
    const { classes } = this.props;
    return <div className={classes.list}>
      <List>
        <Filter {...this.props}/>
      </List>
    </div>
  }

  getScheduleTable(scheduleData) {
    const { expanded } = this.state;
    const { classes, sessionDetails } = this.props;
    return scheduleData.map((item, index) => {
        let timeIndex = item.time.indexOf('AM' || 'PM');
        return (
        <ExpansionPanel key = {index}expanded={expanded === "panel"+index} onChange={this.handleChange("panel"+index)}>
            <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
                <div className={classes.summary}>
                    <Typography variant="display1" className={classes.time}>
                        {item.time.substring(0, timeIndex)} <span className={classes.ampm}>{item.time.slice(-2)}</span>
                    </Typography>
                    <Typography className={classes.title}>
                        <div>{item.title}</div>
                        <div>{item.duration} | {item.location}</div>
                    </Typography>
                </div>
            </ExpansionPanelSummary>
            {sessionDetails && sessionDetails.speakerData &&
            <ExpansionPanelDetails>
                <div>
                    <Typography>
                        <img style={imgStyle} src={defaultProfileIcon}/><br/>
                        <span >{sessionDetails.speakerData.speakerName}</span><br/>
                        <span>{sessionDetails.speakerData.designation}</span><br/>
                        <span>{sessionDetails.sessionDesc}</span><br/>
                        {sessionDetails.tagsInfo.map((item, index) => <span key={index}>{item}</span>)}
                    </Typography>
                </div>
                <div onClick={this.handleOpen}>Show More</div>
            </ExpansionPanelDetails>}
        </ExpansionPanel>
        )});
  }

  handleOpen = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  }
  
  toggleDrawer = (open) => () => {
    this.setState({
      filter : open,
    });
  };

  render() {
    const { scheduleData, sessionDetails, filterTags } = this.props;
    console.log(filterTags);
    console.log(sessionDetails);
    return (
      <Fragment>
        <div className="schedule-bar">Today's Schedule
          <button onClick={this.toggleDrawer(true)}>Filter</button>
        </div>
        <Grid container spacing={16} justify="center">
          <Grid item xs={12}>
            {scheduleData && this.getScheduleTable(scheduleData)}
          </Grid>
        <ShowMoreModal open={this.state.showModal} handleClose={this.handleClose}/>
      </Grid>
        <Drawer anchor="right" open={this.state.filter} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
          <button onClick={this.toggleDrawer(false)}>Close</button>
            {this.sideList()}
          </div>
        </Drawer>
      </Fragment>
    );
  }
}

Schedule.propTypes = {
  classes: PropTypes.object.isRequired,
  scheduleData: PropTypes.array
};

export default withStyles(styles)(Schedule);
