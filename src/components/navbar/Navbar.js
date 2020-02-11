import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import "./navbar.scss";

export function Navbar(props) {
  const [activeTab, changeTab] = React.useState(props.activeTab);
  const [redirect, setRedirect] = React.useState(false);

  const handleChange = (event, newTab) => {
    setRedirect(true);
    changeTab(newTab);
  };

  const CustomTab = withStyles(theme => ({
    root: {
      fontFamily: "Noto sans",
      fontSize: 14,
      textTransform: "capitalize"
    },
    selected: {
      fontWeight: "bold"
    },
    wrapper: {
      textTransform: "capitalize"
    }
  }))(props => <Tab disableRipple {...props} />);

  if (redirect) {
    return <Redirect to={`/${activeTab}`} />;
  } else {
    return (
      <div className="navbar">
        <div className="logo">Third Hand </div>
        <Tabs
          component="nav"
          value={activeTab}
          onChange={handleChange}
          aria-label="navbar-links"
        >
          <CustomTab label="Dashboard" value="dashboard" />
          <CustomTab label="Projects" value="projects" />
          <CustomTab label="Resources" value="resources" />
        </Tabs>
      </div>
    );
  }
}
