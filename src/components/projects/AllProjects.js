import React from "react";
import { ProjectThumbnail } from "./ProjectThumbnail";
import { Grid, Typography, Divider } from "@material-ui/core";
import "./projects.scss";
import { CustomDivider } from "../ComponentExports";

export function AllProjects(props) {
  return (
    <div className="projects">
      <Typography variant="h1">Browse Projects</Typography>
      <div className="project-section">
        <Typography variant="h2">Start from Scratch</Typography>
        <Typography variant="body1" style={{ marginTop: "-16px" }}>
          Made by you, for you (or somebody else)
        </Typography>
        <Grid container spacing={10}>
          <Grid item>
            <ProjectThumbnail />
          </Grid>
          <Grid item>
            <ProjectThumbnail />
          </Grid>
          <Grid item>
            <ProjectThumbnail />
          </Grid>
          <Grid item>
            <ProjectThumbnail />
          </Grid>
          <Grid item>
            <ProjectThumbnail />
          </Grid>
          <Grid item>
            <ProjectThumbnail />
          </Grid>
        </Grid>
      </div>
      <CustomDivider />
      <div className="project-section">
        <Typography variant="h2">Repair + Embellish</Typography>
        <Typography variant="body1" style={{ marginTop: "-16px" }}>
          Because clothes worth wearing are worth repairing.
        </Typography>
        <Grid container spacing={10}>
          <Grid item>
            <ProjectThumbnail />
          </Grid>
          <Grid item>
            <ProjectThumbnail />
          </Grid>
          <Grid item>
            <ProjectThumbnail />
          </Grid>
          <Grid item>
            <ProjectThumbnail />
          </Grid>
          <Grid item>
            <ProjectThumbnail />
          </Grid>
          <Grid item>
            <ProjectThumbnail />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
