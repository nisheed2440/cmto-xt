import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const styles = theme => ({
  root: {
    display: "inline-flex",
    marginRight: theme.spacing.unit
  },
  flair: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
    display: "inline-block",
    position: "relative",
    overflow: "hidden",
    textTransform: "capitalize"
  },
  circle: {
    borderRadius: "50%",
    display: "inline-block",
    height: "12px",
    marginLeft: "1px",
    marginRight: "5px",
    position: "absolute",
    width: "12px",
    backgroundColor: "#fafafa"
  },
  label: {
      marginLeft: '20px',
      position: 'relative',
      color: '#000'
  },
});

class SessionTag extends Component {
  render() {
    const { classes, color, label } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.flair}>
          <span className={classes.circle} style={{ backgroundColor: color }} />
          <Typography variant="caption" className={classes.label}>{label}</Typography>
        </div>
      </div>
    );
  }
}

SessionTag.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string
};

SessionTag.defaultProps = {
  color: "#574ddd",
  label: "#999"
};

export default withStyles(styles)(SessionTag);
