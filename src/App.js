import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/materialTheme";
import "./styles/App.scss";
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
          <Route exact path="/" render={() => <Dashboard />} />
          <Route exact path="/dashboard" render={() => <Dashboard />} />
          <Route exact path="/projects" render={() => <AllProjects />} />
          <Route
            exact
            path="/project_detail"
            render={() => <ProjectDetail />}
          />
          <Route exact path="/resources" render={() => <Resources />} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
