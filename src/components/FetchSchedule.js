import React from 'react'
import {fetchScheduleInfo, fetchSessionDetails} from '../store/actions'
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
    constructor(props) {
        super(props);
        this.state ={
            scheduleData: [],
            sessionDetails : {}
        }
    }
    componentDidMount(){
        fetchScheduleInfo();
    }
    getSessionDetails = () => {
        fetchSessionDetails();
    }
    componentWillReceiveProps(nextProps) {
        console.log('receiveProps ' + JSON.stringify(nextProps.scheduleData));
        if(this.props.scheduleData !== nextProps.scheduleData) {
            this.setState({scheduleData:nextProps.scheduleData});
        }
        if(this.props.sessionDetails !== nextProps.sessionDetails) {
            this.setState({sessionDetails:nextProps.sessionDetails});
        }

    }


    render(){
        console.log(this.state.scheduleData);
        return <Schedule sessionDetails ={this.state.sessionDetails} getSessionDetails={this.getSessionDetails} scheduleData = {this.state.scheduleData && this.state.scheduleData[0] && this.state.scheduleData[0].session}/>
    }
}

const mapStateToProps = state => ({
    scheduleData: state.scheduleInfo.scheduleInfo,
    sessionDetails: state. scheduleInfo.sessionDetails
  });

export default connect(
    mapStateToProps
  )(withStyles(styles)(withWidth()(withRouter(FetchSchedule))));
