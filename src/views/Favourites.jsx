import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { actionUpdateTab } from "../store/actions";

const styles = theme => ({});

class Favourites extends Component {
  componentWillMount() {
    const {updateTab} = this.props;
    updateTab('favourites');
  }
 
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}/>
    );
  }
}

Favourites.propTypes = {
  classes: PropTypes.object.isRequired,
  updateTab: PropTypes.func.isRequired
};


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  updateTab: data => {
    dispatch(actionUpdateTab(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Favourites));