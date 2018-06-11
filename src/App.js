import React, { Component } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import theme from "./utils/theme";
import WTabs from "./components/WTabs";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./App.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: "8px",
    maxWidth: "1200px",
    margin: "0 auto",
    flexShrink: 0,
    marginTop: "-32px"
  },
  routeBody:{
    flexGrow: 1,
    padding: "8px",
    minHeight: '30vh'
  },
  ribbon: {
    width: "100%",
    height: "40vh",
    backgroundColor: "#3F51B5",
    flexShrink: 0
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <div className={classes.ribbon} />
          <div className={classes.root}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <Paper>
                  <WTabs />
                  <div className={classes.routeBody}>
                    <Typography>
                      Enim anim anim eu proident id. Proident labore sit incididunt
                      aute reprehenderit labore proident ex enim. Incididunt culpa
                      ea non quis occaecat quis labore laboris. Minim sint et
                      reprehenderit cupidatat magna sint proident consequat nostrud
                      eu dolore sint non.
                    </Typography>
                  </div> 
                </Paper>
              </Grid>
            </Grid>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
