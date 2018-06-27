import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import Icon from "@material-ui/core/Icon";
import SessionTag from "../SessionTag";
import "./TimelineCard.css";
const styles = theme => ({
  root: {
    backgroundColor: "#ffffff",
    marginBottom: 16
  },
  footer: {
    justifyContent: "flex-end"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

class TimelineCard extends Component {
  state = {
    expanded: false
  };
  toggleExpanded = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };
  render() {
    const { session, classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardHeader
          title={
            <Typography gutterBottom noWrap variant="body2">
              {session.title}
            </Typography>
          }
          subheader={
            <Fragment>
              <Typography gutterBottom variant="caption">
                {session.meta.duration} | {session.meta.venue}
              </Typography>
              <div>
                {session.topics.map(tag => (
                  <SessionTag
                    key={tag.id}
                    label={tag.label}
                    color={tag.color || ""}
                  />
                ))}
              </div>
            </Fragment>
          }
          action={
            <IconButton
              onClick={this.toggleExpanded}
              className={`${classes.expand} ${
                this.state.expanded ? classes.expandOpen : ""
              }`}
            >
              <Icon>expand_more</Icon>
            </IconButton>
          }
        />
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {session.speakers.map(speaker => (
              <Fragment key={speaker.id}>
                <Typography gutterBottom noWrap variant="body2">{speaker.name}</Typography>
                <Typography gutterBottom noWrap variant="caption">{speaker.designation}</Typography>
              </Fragment>
            ))}
            <Typography variant="body1">{session.content}</Typography>
          </CardContent>
          <CardActions className={classes.footer}>
            <Button size="small" color="secondary" className={classes.button}>
              Show More
            </Button>
          </CardActions>
        </Collapse>
      </Card>
    );
  }
}

TimelineCard.propTypes = {
  classes: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired,
  moreCallback: PropTypes.func
};

TimelineCard.defaultProps = {
  session: { meta: {}, speakers: [], topics: [] }
};

export default withStyles(styles)(TimelineCard);
