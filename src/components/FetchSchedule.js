import React from 'react'
import {fetchScheduleInfo} from '../store/actions'
import Schedule from '../views/Schedule'
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";

const styles = {
    root: {
      flexGrow: 1
    }
  };

class FetchSchedule extends React.Component{
    componentDidMount(){
        fetchScheduleInfo();
    }

    render(){
        return <Schedule scheduleData = {this.props.scheduleData && this.props.scheduleData[0] && this.props.scheduleData[0].session}/>
    }
}

const mapStateToProps = state => ({
    scheduleData: state.scheduleInfo.scheduleInfo
  });

export default connect(
    mapStateToProps
  )(withStyles(styles)(withWidth()(withRouter(FetchSchedule))));
