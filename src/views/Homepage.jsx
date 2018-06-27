import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Route, Redirect, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import NavTabs from "../components/NavTabs";
import HeroBanner from "../components/HeroBanner";
import BannerImage from "../assets/images/bg8.jpg";
import WninLogo from "../assets/images/wnin_logo.png";
import Agenda from "./Agenda";
import FilterSidebar from "../components/FilterSidebar";
import Favourites from "./Favourites";
import { connect } from "react-redux";
import {
  actionUpdateScheduleInfo,
  actionUpdateFilterTags
} from "../store/actions";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit,
    maxWidth: "1200px",
    margin: "0 auto",
    flexShrink: 0
  },
  routeBody: {
    flexGrow: 1,
    minHeight: "500px"
  }
});

const routeMapping = {
  favourites: <Favourites />,
  agenda: <Agenda />
};

class Homepage extends Component {
  fetchSessions = () => {
    // "https://api.myjson.com/bins/x87ta"
    return axios.get("http://localhost/wordpress/wp-json/cmto/v1/sessions").catch(err => {
      console.log(err);
    });
  };

  fetchFilters = () => {
    // "https://api.myjson.com/bins/1246ou"
    return axios.get("http://localhost/wordpress/wp-json/cmto/v1/topics").catch(err => {
      console.log(err);
    });
  };

  componentDidMount() {
    const { updateData, updateFilters } = this.props;
    Promise.all([this.fetchSessions(), this.fetchFilters()]).then(modules => {
      updateData(modules[0].data);
      updateFilters(modules[1].data);
    });
  }

  render() {
    const { classes, sidebarOpen } = this.props;
    return (
      <React.Fragment>
        <HeroBanner imageSrc={BannerImage}>
          <LazyLoad height={200}>
            <img src={WninLogo} alt="Logo" />
          </LazyLoad>
        </HeroBanner>
        <Paper elevation={1}>
          <NavTabs />
        </Paper>
        <main className={classes.root}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
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
                <FilterSidebar isOpen={sidebarOpen} />
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
  history: PropTypes.object.isRequired,
  sidebarOpen: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  sidebarOpen: state.sidebar.isOpen
});

const mapDispatchToProps = dispatch => ({
  updateData: data => {
    dispatch(actionUpdateScheduleInfo(data));
  },
  updateFilters: data => {
    dispatch(actionUpdateFilterTags(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Homepage));
