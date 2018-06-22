import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

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
  }
});

class Schedule extends Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  getScheduleTable(scheduleData) {
    const { expanded } = this.state;
    const { classes } = this.props;
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
                        {item.title} 
                    </Typography>
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    <div>{item.title}</div>
                    <div>{item.date}</div>
                    <div>{item.duration}</div>
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        )});
  }

  render() {
    const { scheduleData } = this.props;
    console.log(scheduleData);
    return (
      <Grid container spacing={16} justify="center">
        <Grid item xs={12}>
          {scheduleData && this.getScheduleTable(scheduleData)}
        </Grid>
      </Grid>
    );
  }
}

Schedule.propTypes = {
  classes: PropTypes.object.isRequired,
  scheduleData: PropTypes.array
};

export default withStyles(styles)(Schedule);
