import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import red from '@material-ui/core/colors/red';
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";
import IconButton from "@material-ui/core/IconButton";
import ButtonBase from "@material-ui/core/ButtonBase";
import SessionTag from "./SessionTag";
import ShowMore from "./ShowMore";
import SocialShare from "./SocialShare";
import { connect } from "react-redux";
import { actionFavoriteSession } from "../store/actions/index";
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
  favButton: {
    '&:hover': {
      color: red[500]
    }
  },
  favButtonActive: {
    color: red[800]
  },
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
  constructor(props) {
    super(props);
    this.state = {favButtonClass: "favButton"};
  }
  favClick = (idVal) => {
    const { favButtonClass, toggleFavIconState } = this.props;
    let favSessionData = localStorage.getItem("favSessions") ? JSON.parse(localStorage.getItem("favSessions")) : [];
    if ( !favSessionData.length ) {
      favSessionData.push(idVal);
      localStorage.setItem("favSessions", JSON.stringify(favSessionData));
    }
    else {
      favSessionData.map(favData => {
        if( favData.id && favData.id !== idVal.id ) {
          favSessionData.push(idVal);
          localStorage.setItem("favSessions", JSON.stringify(favSessionData));
        }
      }); 
    }
    toggleFavIconState(!favButtonClass);
  };
  render() {
    const { classes, width, favButtonClass, showModal, tags, id, type, title, venue } = this.props;
    let favIcon;
    if( type === 'session') {
      favIcon = (<IconButton
      className={favButtonClass ? classes.favButtonActive : classes.favButton}
      aria-label="Favourite"
      onClick={() =>this.favClick({id})}
    >
      <Icon>star</Icon>
    </IconButton> );

    }
    return (
      <Card className={classes.root} elevation={1}>
        <CardContent className={classes.cardContent}>
          <div className={classes.timeSection} />
          <div className={classes.detailSection}>
            <ButtonBase className={classes.ripple} onClick={showModal}>
              <Typography variant="title" gutterBottom noWrap>
                {title}
              </Typography>
              <SocialShare/>
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
           {favIcon}
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
  type: PropTypes.string.isRequired,
  favButtonClass: PropTypes.bool,
  id: PropTypes.number.isRequired,
  showModal: PropTypes.func,
  toggleFavIconState: PropTypes.func.isRequired,
  favSessionData: PropTypes.array
};

const mapStateToProps = state => ({
  favButtonClass: state.favSession.favButtonClass
});

const mapDispatchToProps = dispatch => ({
  toggleFavIconState: favButtonClass => {
    dispatch(actionFavoriteSession(favButtonClass));
  }
});

ScheduleTile.defaultProps = {
  showModal: () => {
    console.log("in showModal");
    return (<ShowMore/>);
  },
  tags: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withWidth()(ScheduleTile)));
