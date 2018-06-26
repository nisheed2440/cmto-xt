import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import FilterHeader from "../components/FilterHeader";
import ScheduleTile from "../components/ScheduleTile";
import { connect } from "react-redux";

const styles = theme => ({
  spinner: {
    margin: theme.spacing.unit * 2
  }
});

class Schedule extends Component {
  createSessionList = sessions => {
    return sessions.map(session => {
      return <ScheduleTile key={session.id} title={session.title} venue={session.meta.venue} tags={session.topics}/>
    });
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
    return (
      <Fragment>
        <FilterHeader disabled={!filters.length} setCount={3} />
        <Grid container spacing={16} justify="center">
          <Grid item xs={12}>
            {sessions.length
              ? this.createSessionList(sessions)
              : this.showSpinner()}
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

Schedule.propTypes = {
  classes: PropTypes.object.isRequired,
  sessions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  sessions: state.sessions.data,
  filters: state.sessions.filters
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Schedule));
