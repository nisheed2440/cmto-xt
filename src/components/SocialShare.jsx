import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { TwitterShareButton,
         FacebookShareButton,
         GooglePlusShareButton,
         FacebookIcon,
         TwitterIcon,
         GooglePlusIcon    } from 'react-share';

const styles = theme => ({
    socialShareIcon: {
        verticalAlign: 'top',
        display: 'inline-block',
        marginRight: '30px',
        textAlign: 'center'
    },
    shareCount: {
        marginTop: '3px',
        fontSize: '12px'
    },
    shareButton: {
        cursor: 'pointer'
    }
});

class SocialShare extends Component {
    render() {
        const shareUrl = 'http://wnin.info';
        const title = 'CMTO';
        const { classes } = this.props;
        return(
            <Grid container>
                <Grid item xs={12}>
                    <div className={classes.socialShareIcon}>
                        <TwitterShareButton
                            url={shareUrl}
                            title={title}
                            className={classes.shareButton}>
                            <TwitterIcon
                            size={32}
                            round />
                        </TwitterShareButton>

                        <div className={classes.shareCount}>
                            &nbsp;
                        </div>
                    </div>
                    <div className={classes.socialShareIcon}>
                        <FacebookShareButton
                            url={shareUrl}
                            quote={title}
                            className={classes.shareButton}>
                            <FacebookIcon
                                size={32}
                                round />
                        </FacebookShareButton>
                        {/* <FacebookShareCount
                            url={shareUrl}
                            className={classes.shareCount}>
                            {count => count}
                        </FacebookShareCount> */}
                    </div>
                    <div className={classes.socialShareIcon}>
                        <GooglePlusShareButton
                            url={shareUrl}
                            className={classes.shareButton}>
                            <GooglePlusIcon
                            size={32}
                            round />
                        </GooglePlusShareButton>

                        {/* <GooglePlusShareCount
                            url={shareUrl}
                            className={classes.shareCount}>
                            {count => count}
                        </GooglePlusShareCount> */}
                    </div>
                </Grid>
            </Grid>
        );
    } 
}

SocialShare.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SocialShare);
