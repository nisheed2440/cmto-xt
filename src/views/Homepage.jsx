import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Route, Redirect, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import NavTabs from "../components/NavTabs";
import HeroBanner from "../components/HeroBanner";
import BannerImage from "../assets/images/bg7.jpg";
import Agenda from "./Agenda";
import Schedule from "./Schedule";
import Favourites from "./Favourites";
import MyPass from "./MyPass";

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

const routeMapping = {
  schedule: <Schedule />,
  favourites: <Favourites />,
  agenda: <Agenda />,
  mypass: <MyPass />
};

class Homepage extends Component {
  render() {
    const { classes } = this.props;
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
                <Switch>
                  <Route
                    path="/home/:tab"
                    exact
                    render={({ match }) => {
                      const tab = match.params.tab;
                      if (routeMapping[tab]) {
                        return routeMapping[tab];
                      } else {
                        return <Redirect to="/home/agenda" />;
                      }
                    }}
                  />
                  <Redirect from="/home" to="/home/agenda" />
                </Switch>
              </div>
            </Grid>
          </Grid>
        </main>
      </React.Fragment>
    );
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(Homepage);
