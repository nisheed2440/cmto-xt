import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Homepage from "./views/Homepage";
import theme from "./utils/theme";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
              <Redirect from="/" to="/home" />
              <Route path="/home" component={Homepage} />
            </MuiThemeProvider>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
