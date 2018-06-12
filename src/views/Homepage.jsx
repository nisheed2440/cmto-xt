import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import NavTabs from "../components/NavTabs";
import HeroBanner from "../components/HeroBanner";
import BannerImage from "../assets/images/bg7.jpg";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit,
    maxWidth: "1200px",
    margin: "0 auto",
    flexShrink: 0,
    marginTop: "-32px"
  },
  routeBody: {
    flexGrow: 1,
    padding: theme.spacing.unit,
    minHeight: "1000px"
  }
});

class Homepage extends Component {
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <HeroBanner imageSrc={BannerImage} />
        <main className={classes.root}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Paper square elevation={1}>
                <NavTabs />
              </Paper>
              <div className={classes.routeBody}>
                        <Typography>
                            Enim anim anim eu proident id. Proident labore sit incididunt
                            aute reprehenderit labore proident ex enim. Incididunt culpa
                            ea non quis occaecat quis labore laboris. Minim sint et
                            reprehenderit cupidatat magna sint proident consequat nostrud
                            eu dolore sint non.
                        </Typography>
                        </div> 
            </Grid>
          </Grid>
        </main>
      </React.Fragment>
    );
  }
}

Homepage.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Homepage);
