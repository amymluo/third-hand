import React from "react";
import { ProjectThumbnail } from "./ProjectThumbnail";
import { Grid, Typography } from "@material-ui/core";
import "./projects.scss";
import { CustomDivider } from "../ComponentExports";

export function AllProjects(props) {
  return (
    <div className="projects">
      <Grid container className="project-section">
        <Grid item sm="3">
          <Typography variant="h2">Start from Scratch</Typography>
          <Typography variant="body1" style={{ marginTop: "-16px" }}>
            Made by you, for you (or somebody else)
          </Typography>
        </Grid>
        <Grid item container sm="9">
          <Grid item>
            <ProjectThumbnail projectId={0} />
          </Grid>
          <Grid item>
            <ProjectThumbnail projectId={1} />
          </Grid>
          <Grid item>
            <ProjectThumbnail projectId={2} />
          </Grid>
        </Grid>
      </Grid>
      <CustomDivider />
      <Grid container className="project-section">
        <Grid item sm="3">
          <Typography variant="h2">Repair + Embellish</Typography>
          <Typography variant="body1" style={{ marginTop: "-16px" }}>
            Because clothes worth wearing are worth repairing.
          </Typography>
        </Grid>
        <Grid container item sm={9}>
          <Grid item>
            <ProjectThumbnail projectId={3} />
          </Grid>
          <Grid item>
            <ProjectThumbnail projectId={4} />
          </Grid>
          <Grid item>
            <ProjectThumbnail projectId={5} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
