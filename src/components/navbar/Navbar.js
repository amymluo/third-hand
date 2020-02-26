import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import cx from "classnames";
import "./navbar.scss";

export function Navbar(props) {
  const { activeTab } = props;

  return (
    <Grid className="navbar" container justify="space-between">
      <Grid item container id="left" alignContent="center" spacing={3} sm={6}>
        <Grid item>
          <Link className="logo" to="/dashboard">
            Third Hand
          </Link>
        </Grid>
        <Grid item className={cx("tab", { active: activeTab === "projects" })}>
          <Link to="/projects">Browse</Link>
        </Grid>
        <Grid item className={cx("tab", { active: activeTab === "resources" })}>
          <Link to="/resources">Resources</Link>
        </Grid>
      </Grid>
      <Grid
        item
        container
        id="right"
        sm={6}
        alignContent="center"
        justify="flex-end"
        spacing={3}
      >
        <Grid item className={cx("tab", { active: activeTab === "dashboard" })}>
          <Link to="/dashboard">My Projects</Link>
        </Grid>
        <Grid item>
          <span className="tab">User</span>
        </Grid>
      </Grid>
    </Grid>
  );
}
