import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import TimelineCard from '../components/TimelineCard/TimelineCard';
import { connect } from "react-redux";
import { actionUpdateTab } from "../store/actions";
const styles = theme => ({
  spinner: {
    margin: theme.spacing.unit * 2
  }
});

class Schedule extends Component {
  state = {
    expanded: false
  }
  componentWillMount() {
    const { updateTab } = this.props;
    updateTab("agenda");
  }
  createSessionList = sessions => {
    return (
      <div className="timeline">
        <header className="timeline-header">
          <span className="tag is-medium is-primary">Start</span>
        </header>
        {sessions.map(session => {
          return (
            <div key={session.id} className="timeline-item is-primary">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <p className="heading">{session.meta.time}</p>
                <TimelineCard key={session.id} session={session}/>
              </div>
            </div>
          );
        })}
        <header className="timeline-header">
          <span className="tag is-medium is-primary">End</span>
        </header>
      </div>
    );
  };
  showSpinner = () => {
    const { classes } = this.props;
    return (
      <Grid container spacing={0} justify="center">
        <CircularProgress className={classes.spinner} />
      </Grid>
    );
  };
  render() {
    const { sessions, filters } = this.props;
    console.log(filters);
    return (
      <Fragment>
        {sessions.length
          ? this.createSessionList(sessions)
          : this.showSpinner()}
      </Fragment>
    );
  }
}

Schedule.propTypes = {
  classes: PropTypes.object.isRequired,
  sessions: PropTypes.array.isRequired,
  updateTab: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  sessions: state.sessions.data,
  filters: state.sessions.filters
});

const mapDispatchToProps = dispatch => ({
  updateTab: data => {
    dispatch(actionUpdateTab(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Schedule));
