import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import cx from "classnames";
import "./navbar.scss";
import { CustomButton } from "../ComponentExports";
import { CartIcon } from "../icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export function Navbar(props) {
  const { activeTab, isAuthenticated, login, signOut } = props;

  return (
    <Grid className="navbar" container justify="space-between">
      <Grid item container id="left" alignContent="center" spacing={3} sm={6}>
        <Grid item>
          <Link className="logo" to="/">
            Third Hand
          </Link>
        </Grid>
        <Grid
          item
          className={cx("tab", {
            active: activeTab && activeTab === "projects"
          })}
        >
          <Link to="/projects">Browse</Link>
        </Grid>
        <Grid
          item
          className={cx("tab", {
            active: activeTab && activeTab === "resources"
          })}
        >
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
        {isAuthenticated ? (
          <React.Fragment>
            <Grid
              item
              className={cx("tab", {
                active: activeTab && activeTab === "dashboard"
              })}
            >
              <Link to="/dashboard">My Projects</Link>
            </Grid>
            <Grid item className="tab">
              <Link to="/cart">
                <CartIcon fontSize="large" />
              </Link>
            </Grid>
            <Grid item className="tab">
              <div className="navbar-user" onClick={signOut}>
                <AccountCircleIcon color="secondary" fontSize="large" />
                <span
                  style={{ marginLeft: "8px", textTransform: "capitalize" }}
                >
                  User
                </span>
              </div>
            </Grid>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Grid item className="tab">
              <CartIcon fontSize="large" />
            </Grid>
            <Grid item className="tab" style={{ padding: "0 12px" }}>
              <CustomButton variant="contained" onClick={login} size="small">
                Sign Up
              </CustomButton>
            </Grid>
          </React.Fragment>
        )}
      </Grid>
    </Grid>
  );
}
