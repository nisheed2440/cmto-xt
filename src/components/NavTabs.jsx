import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MUITabs from "@material-ui/core/Tabs";
import MUITab from "@material-ui/core/Tab";
import withWidth from "@material-ui/core/withWidth";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actionUpdateTab } from "../store/actions";

const styles = {
  root: {
    flexGrow: 1,
    background: '#FFFFFF'
  }
};

class NavTabs extends Component {
  handleChange = (event, value) => {
    const { history, updateTab } = this.props;
    updateTab(value);
    history.push(`/home/${value}`);
  };
  render() {
    const { classes, tab } = this.props;
    return (
      <div className={classes.root}>
        <MUITabs
          value={tab}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered={true}
        >
          <MUITab label="Agenda" value="agenda" />
          <MUITab label="Favorites" value="favourites" />
        </MUITabs>
      </div>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  updateTab: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  tab: state.tab.value
});

const mapDispatchToProps = dispatch => ({
  updateTab: (tabValue) => {
    dispatch(actionUpdateTab(tabValue));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withWidth()(withRouter(NavTabs))));
