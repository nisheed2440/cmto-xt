import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";
import IconButton from "@material-ui/core/IconButton";
import ButtonBase from "@material-ui/core/ButtonBase";
import SessionTag from "./SessionTag";
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 2,
    background: "#FFFFFF"
  },
  cardContent: {
    display: "flex",
    paddingBottom: `${theme.spacing.unit * 2}px !important`
  },
  timeSection: {},
  detailSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer"
  },
  favButton: {},
  labelInline: {
    display: "inline-block",
    position: "relative",
    color: "#000",
    marginRight: theme.spacing.unit * 2
  },
  labelBlock: {
    display: "block",
    position: "relative",
    color: "#000",
    marginRight: "10px"
  },
  ripple: {
    textAlign: 'inherit',
    display:'block',
    padding: theme.spacing.unit
  }
});

class ScheduleTile extends Component {
  render() {
    const { classes, width, favClick, tags, title, venue } = this.props;
    return (
      <Card className={classes.root} elevation={1}>
        <CardContent className={classes.cardContent}>
          <div className={classes.timeSection} />
          <div className={classes.detailSection}>
            <ButtonBase className={classes.ripple} onClick={() => (console.log('Clicked'))}>
              <Typography variant="title" gutterBottom noWrap>
                {title}
              </Typography>
              <div>
                <Typography
                  gutterBottom={width === "xs" ? true : false}
                  variant="caption"
                  className={
                    width === "xs" ? classes.labelBlock : classes.labelInline
                  }
                >
                  {venue}
                </Typography>
                {tags.map(tag => (
                  <SessionTag
                    key={tag.id}
                    label={tag.label}
                    color={tag.color || ""}
                  />
                ))}
              </div>
            </ButtonBase>
          </div>
          <IconButton
            className={classes.favButton}
            aria-label="Favourite"
            onClick={favClick}
          >
            <Icon>star</Icon>
          </IconButton>
        </CardContent>
      </Card>
    );
  }
}

ScheduleTile.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  favClick: PropTypes.func,
  tags: PropTypes.array
};

ScheduleTile.defaultProps = {
  favClick: () => {},
  tags: []
};

export default withStyles(styles)(withWidth()(ScheduleTile));
