import React from "react";
import { Typography, Grid } from "@material-ui/core";
import OngoingProject from "./OngoingProject";
import { RecommendedProject } from "./RecommendedProject";
import "./dashboard.scss";

export function Dashboard(props) {
  return (
    <div className="dashboard">
      <Typography variant="h1">My Projects</Typography>
      <div className="dashboard-section">
        <Typography variant="h2">In Progress</Typography>
        <Grid container spacing={8} direction="column">
          <Grid item>
            <OngoingProject />
          </Grid>
        </Grid>
      </div>
      <div className="dashboard-section">
        <Typography variant="h2">Recommended Projects</Typography>
        <Grid container spacing={8}>
          <Grid item>
            <RecommendedProject />
          </Grid>
          <Grid item>
            <RecommendedProject />
          </Grid>
          <Grid item>
            <RecommendedProject />
          </Grid>
        </Grid>
      </div>
      <div className="dashboard-section">
        <Typography variant="h2">Completed Projects</Typography>
        <Grid container spacing={10} direction="column">
          <Grid item>
            <OngoingProject />
          </Grid>
          <Grid item>
            <OngoingProject />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
