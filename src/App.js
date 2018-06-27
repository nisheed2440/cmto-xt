import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { LoadableHomepage } from "./loadable";
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
              <Switch>
                <Route path="/home" component={LoadableHomepage} />
                <Redirect from="/" to="/home" />
              </Switch>
            </MuiThemeProvider>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
