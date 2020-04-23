import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  withRouter
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
  LessonContent,
  Cart,
  Checkout
} from "./components/ComponentExports";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const Scroll = withRouter(ScrollToTop);

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
        <Scroll>
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
            <Route exact path="/cart" render={() => <Cart />} />
            <Route
              exact
              path="/checkout"
              render={() => <Checkout login={login} />}
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
          <img
            src="/assets/photos/homepage/footer.png"
            alt="footer"
            width="100%"
          />
        </Scroll>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
