import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import NavTabs from "../components/NavTabs/NavTabs";
import HeroBanner from "../components/HeroBanner";
import BannerImage from "../assets/images/bg8.jpg";
import WninLogo from "../assets/images/CMTOu_white.png";
import Schedule from "./Schedule";
import FilterSidebar from "../components/FilterSidebar";
import FilterHeader from "../components/FilterHeader/FilterHeader";
import Favourites from "./Favourites";
import { connect } from "react-redux";
import {
  actionUpdateScheduleInfo,
  actionUpdateFilterTags,
  actionUpdateLoader
} from "../store/actions";
import MainLoader from "../components/MainLoader/MainLoader";

const styles = theme => ({});

const routeMapping = {
  favourites: <Favourites />,
  agenda: <Schedule />
};

class Homepage extends Component {
  handleChange = (event, value) => {
    const { history } = this.props;
    history.push(`/home/${value}`);
  };

  fetchSessions = () => {
    // "https://api.myjson.com/bins/x87ta"
    return axios
      .get("http://localhost/wordpress/wp-json/cmto/v1/sessions")
      .catch(err => {
        console.log(err);
      });
  };

  fetchFilters = () => {
    // "https://api.myjson.com/bins/1246ou"
    return axios
      .get("http://localhost/wordpress/wp-json/cmto/v1/topics")
      .catch(err => {
        console.log(err);
      });
  };

  componentWillMount() {
    const { updateLoader } = this.props;
    updateLoader(true);
  }

  componentDidMount() {
    const { updateData, updateFilters, updateLoader } = this.props;
    Promise.all([this.fetchSessions(), this.fetchFilters()]).then(modules => {
      updateData(modules[0].data);
      updateFilters(modules[1].data);
      updateLoader(false);
    });
  }

  render() {
    const { sidebarOpen, isVisible, tab, filters } = this.props;
    return (
      <React.Fragment>
        <HeroBanner imageSrc={BannerImage}>
          <LazyLoad height={200}>
            <img src={WninLogo} alt="Logo" />
          </LazyLoad>
        </HeroBanner>
        <Paper elevation={1}>
          <NavTabs tab={tab} tabClickHandler={this.handleChange} />
        </Paper>
        <FilterHeader title={tab} disabled={!filters.length} />
        <main className="section">
          <div className="container">
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
        </main>
        <MainLoader isVisible={isVisible} />
      </React.Fragment>
    );
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  filters: PropTypes.array.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  updateData: PropTypes.func.isRequired,
  updateFilters: PropTypes.func.isRequired,
  updateLoader: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  sidebarOpen: state.sidebar.isOpen,
  isVisible: state.loader.isVisible,
  tab: state.tab.value,
  filters: state.sessions.filters
});

const mapDispatchToProps = dispatch => ({
  updateData: data => {
    dispatch(actionUpdateScheduleInfo(data));
  },
  updateFilters: data => {
    dispatch(actionUpdateFilterTags(data));
  },
  updateLoader: data => {
    dispatch(actionUpdateLoader(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withRouter(Homepage)));
