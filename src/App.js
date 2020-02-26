import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/materialTheme";
import {
  Dashboard,
  AllProjects,
  ProjectDetail,
  Resources
} from "./components/ComponentExports";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/dashboard" render={() => <Dashboard />} />
          <Route exact path="/projects" render={() => <AllProjects />} />
          <Route
            exact
            path="/projects/:projectId"
            render={props => <ProjectDetail {...props} />}
          />
          <Route exact path="/resources" render={() => <Resources />} />
          <Route exact path="/" render={() => <Dashboard />} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
