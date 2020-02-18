import React from "react";
import { Navbar } from "../ComponentExports";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectThumbnail } from "./ProjectThumbnail";
import { Grid } from "@material-ui/core";

export function AllProjects(props) {
  return (
    <div className="projects-container">
      <Navbar activeTab="projects" />
      <Grid container spacing={6} style={{ flexWrap: "nowrap" }}>
        <Grid item style={{ marginTop: "36px" }}>
          <ProjectFilters />
        </Grid>

        <Grid item>
          <div className="content">
            <h1 style={{ marginTop: "36px" }}>All Projects</h1>
            <Grid container item spacing={3}>
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
              <Grid item>
                <ProjectThumbnail />
              </Grid>
              <Grid item>
                <ProjectThumbnail />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
