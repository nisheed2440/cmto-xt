import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({

});

class ShowMore extends Component {
    render() {
        return(
            <div/>
        )
    } 
}

ShowMore.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShowMore);
