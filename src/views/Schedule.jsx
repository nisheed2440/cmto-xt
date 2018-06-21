import React from "react";
// import PropTypes from "prop-types";

export default class Schedule extends React.Component{

    getScheduleBar = () => {
        return <div className="schedule-bar">Today's Schedule</div>
    }

    getScheduleList = () => {

    }

    getScheduleDetails = () => {
        return <ul className="schedule-details">
                    {this.getScheduleList()}
                </ul>
    }
    render(){
        return <div className="schedule-wrap">
            {this.getScheduleBar()}
        </div>
    }
}

// Schedule.propTypes = {
   
//   };