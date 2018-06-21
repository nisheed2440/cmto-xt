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

    componentWillReceiveProps(nextProps){
        if(nextProps.scheduleData && nextProps.scheduleData !== this.props.scheduleData)
        {
            console.log(nextProps.scheduleData[0].session);
        }
    }

    render(){
        return <Schedule />
    }
}

const mapStateToProps = state => ({
    scheduleData: state.scheduleInfo.scheduleInfo
  });

//   const mapDispatchToProps = dispatch => ({
//     fetchScheduleInfo: () => {
//       dispatch(fetchScheduleInfo());
//     }
//   });

export default connect(
    mapStateToProps
  )(withStyles(styles)(withWidth()(withRouter(FetchSchedule))));