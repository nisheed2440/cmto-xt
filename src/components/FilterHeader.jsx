import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import { actionToggleSidebar } from "../store/actions";
import { connect } from "react-redux";

const styles = theme => ({
  flex: {
    flex: 1
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  margin: {
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2
  },
  button: {
    marginTop: theme.spacing.unit * 2
  }
});

class FilterHeader extends Component {
  onClickHandler = () => {
    const { sidebarOpen, toggleSidebar } = this.props;
    toggleSidebar(!sidebarOpen);
  };
  getButtonWithBadge() {
    const { classes, disabled, setCount } = this.props;
    return (
      <Badge
        color="primary"
        badgeContent={setCount || 0}
        className={classes.margin}
      >
        <Button
          size={"small"}
          disabled={disabled}
          onClick={this.onClickHandler}
        >
          Filter
          <Icon className={classes.rightIcon}>filter_list</Icon>
        </Button>
      </Badge>
    );
  }

  getButton() {
    const { classes, disabled } = this.props;
    return (
      <Button
        size={"small"}
        className={classes.button}
        disabled={disabled}
        onClick={this.onClickHandler}
      >
        Filter
        <Icon className={classes.rightIcon}>filter_list</Icon>
      </Button>
    );
  }

  render() {
    const { classes, setCount } = this.props;
    return (
      <Grid container spacing={8}>
        <Grid item className={classes.flex} />
        <Grid item>
          {setCount ? this.getButtonWithBadge() : this.getButton()}
        </Grid>
      </Grid>
    );
  }
}

FilterHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired, // Disable the button till there is data
  setCount: PropTypes.number, // The number of filters applied
  sidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  sidebarOpen: state.sidebar.isOpen
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: isOpen => {
    dispatch(actionToggleSidebar(isOpen));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FilterHeader));
