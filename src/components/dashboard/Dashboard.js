import React from "react";
import { Typography, Grid } from "@material-ui/core";
import OngoingProject from "./OngoingProject";
import { RecommendedProject } from "./RecommendedProject";
import { CompletedProject } from "./CompletedProject";
import "./dashboard.scss";

export function Dashboard(props) {
  return (
    <div className="dashboard">
      <Typography variant="h1">My Projects</Typography>
      <div className="dashboard-section">
        <Typography variant="h2">In Progress</Typography>
        <Grid container spacing={10} direction="column">
          <Grid item>
            <OngoingProject />
          </Grid>
        </Grid>
      </div>
      <div className="dashboard-section">
        <Typography variant="h2">Recommended For You</Typography>
        <Grid container spacing={10} justify="center">
          <Grid item>
            <RecommendedProject skill={"pinning"} projectId={5} />
          </Grid>
          <Grid item>
            <RecommendedProject skill={"hemming"} projectId={2} />
          </Grid>
          <Grid item>
            <RecommendedProject skill={"hand stitching"} projectId={4} />
          </Grid>
        </Grid>
      </div>
      <div className="dashboard-section">
        <Typography variant="h2">Completed Projects</Typography>
        <Grid container spacing={10} direction="column">
          <Grid item>
            <CompletedProject />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
