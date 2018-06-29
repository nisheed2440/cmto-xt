import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import SocialShare from "./SocialShare";

const styles = theme => ({
    root: {
        height: 'auto'
    }
});

class ShowMore extends Component {
    render() {
        return(
            <SocialShare/>
        );
    } 
}

ShowMore.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShowMore);
