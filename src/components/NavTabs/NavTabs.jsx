import React, { Component } from "react";
import PropTypes from "prop-types";
import MUITabs from "@material-ui/core/Tabs";
import MUITab from "@material-ui/core/Tab";
import "./NavTabs.css";

class NavTabs extends Component {
  render() {
    const { tab, tabClickHandler } = this.props;
    return (
      <div className={"wnin-tabs-container"}>
        <MUITabs
          value={tab}
          onChange={tabClickHandler}
          indicatorColor="secondary"
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
  tabClickHandler: PropTypes.func.isRequired,
  tab: PropTypes.oneOf(["agenda", "favourites"])
};

NavTabs.defaultProps = {
  tabClickHandler: () => {},
  tab: "agenda"
};

export default NavTabs;
