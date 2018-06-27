import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import "./FilterHeader.css";

class FilterHeader extends Component {
  render() {
    const { disabled, count, title } = this.props;
    return (
      <div className={"wnin-filter-wrapper"}>
        <div className={"wnin-filter-container container"}>
          <Typography variant={'headline'} className={"wnin-filter-title"}>
            {title}
          </Typography>
          <div className={"wnin-filter-button-wrapper"}>
            <Badge color="primary" badgeContent={count || 0} className={""}>
              <IconButton
                aria-label="filter"
                className={"wnin-filter-button"}
                disabled={disabled}
              >
                <Icon className={"wnin-filter-button-icon"}>filter_list</Icon>
              </IconButton>
            </Badge>
          </div>
        </div>
      </div>
    );
  }
}

FilterHeader.propTypes = {
  disabled: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

FilterHeader.defaultProps = {
  disabled: false,
  count: 0,
  title: "Filter Header"
};

export default FilterHeader;
