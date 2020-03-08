import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/materialTheme";
import {
  Dashboard,
  AllProjects,
  ProjectDetail,
  Resources,
  Landing,
  Navbar,
  LessonContent
} from "./components/ComponentExports";

function App() {
  const [isAuthenticated, setAuthenticated] = React.useState(false); // false

  const login = () => {
    setAuthenticated(true);
  };

  const signOut = () => {
    setAuthenticated(false);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar
          login={login}
          signOut={signOut}
          isAuthenticated={isAuthenticated}
        />
        <Switch>
          <Route
            exact
            path="/dashboard"
            render={() =>
              isAuthenticated ? <Dashboard /> : <Redirect to="/" />
            }
          />
          <Route exact path="/projects" render={() => <AllProjects />} />
          <Route
            exact
            path="/projects/:projectId"
            render={props => (
              <ProjectDetail isAuthenticated={isAuthenticated} {...props} />
            )}
          />
          <Route
            exact
            path="/projects/:projectId/:lessonId"
            render={props =>
              isAuthenticated ? (
                <LessonContent {...props} />
              ) : (
                <Redirect to={`/projects/${props.match.params.projectId}`} />
              )
            }
          />
          <Route exact path="/resources" render={() => <Resources />} />
          <Route
            exact
            path="/"
            render={() =>
              isAuthenticated ? <Redirect to="/dashboard" /> : <Landing />
            }
          />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
