import React, { Component } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import WninLogo from "../../assets/images/CMTOu_white.png";
import "./MainLoader.css";

class Loader extends Component {
  render() {
    const { isVisible } = this.props;
    return (
      <div
        className={"wnin-loader"}
        style={{ display: isVisible ? "block" : "none" }}
      >
        <div className={"wnin-loader-logo-wrapper"}>
          <div
            className={"wnin-loader-logo"}
            style={{ backgroundImage: `url(${WninLogo})` }}
          />
          <CircularProgress
            className={"wnin-loader-spinner"}
            style={{ color: "#FFF" }}
            size={50}
          />
        </div>
      </div>
    );
  }
}

Loader.propTypes = {
  isVisible: PropTypes.bool.isRequired
};

Loader.defaultProps = {
  isVisible: false
};

export default Loader;
