import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {

    constructor(props){
        super(props)
    }

    getFilterList = () =>{
        const {filterTags } = this.props;
        return filterTags && filterTags.tagInfo.map((item,index) => {
            return <Fragment>
                        <ListItem key={index} button>
                            <ListItemText primary={item} />
                            <Checkbox
                                checked={false}
                                //   onChange={this.handleChange('checkedB')}
                                value="checkedB"
                                color="primary"
                                />
                            </ListItem>
                        <Divider />
                    </Fragment>
        })
    }


  render() {
    const {filterTags } = this.props;
    
    return (
      <Fragment>
        {this.getFilterList()}
      </Fragment>
    );
  }
}

Filter.propTypes = {
    filterTags: PropTypes.object
};

export default (Filter);
