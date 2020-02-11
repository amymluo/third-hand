import React from "react";
import { Navbar } from "../ComponentExports";
import { Skills } from "./Skills";
import { Grid } from "@material-ui/core";
import OngoingProject from "./OngoingProject";
import "./dashboard.scss";

export function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <Navbar activeTab="dashboard" />
      <Grid
        container
        className="dashboard-content"
        spacing={4}
        style={{ width: "100%", margin: "0" }}
      >
        <Grid item md={3} style={{ marginTop: "64px", paddingLeft: "0" }}>
          <Skills />
        </Grid>
        <Grid item container md={8}>
          <Grid item xs={12}>
            <h1>Ongoing Projects</h1>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={12}>
              <OngoingProject />
            </Grid>
            <Grid item xs={12}>
              <OngoingProject />
            </Grid>
            <Grid item xs={12}>
              <OngoingProject />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <h1>Past Projects</h1>
          </Grid>
          <Grid item container spacing={4}>
            <Grid item md={4} xs={6}>
              <img
                className="past-projects-thumbnail"
                src={"tshirt.jpg"}
                alt="t shirt"
              />
            </Grid>
            <Grid item md={4} xs={6}>
              <img
                className="past-projects-thumbnail"
                src={"tshirt.jpg"}
                alt="t shirt"
              />
            </Grid>
            <Grid item md={4} xs={6}>
              <img
                className="past-projects-thumbnail"
                src={"tshirt.jpg"}
                alt="t shirt"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
