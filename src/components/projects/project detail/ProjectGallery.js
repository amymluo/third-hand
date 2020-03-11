import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { CustomButton } from "../../ComponentExports";

export function ProjectGallery(props) {
  return (
    <div className="project-gallery">
      <Grid
        container
        justify="space-between"
        alignItems="center"
        style={{ marginBottom: "16px" }}
      >
        <Grid item>
          <Typography variant="h3">Project Gallery</Typography>
        </Grid>
        <Grid item>
          <CustomButton variant="outlined">See all</CustomButton>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item>
          <img
            src="/assets/photos/project detail/gallery/gallery1.png"
            alt="gallery"
            width="210px"
          />
        </Grid>
        <Grid item>
          <img
            src="/assets/photos/project detail/gallery/gallery2.png"
            alt="gallery"
            width="210px"
          />
        </Grid>
        <Grid item>
          <img
            src="/assets/photos/project detail/gallery/gallery3.png"
            alt="gallery"
            width="210px"
          />
        </Grid>
        <Grid item>
          <img
            src="/assets/photos/project detail/gallery/gallery4.png"
            alt="gallery"
            width="210px"
          />
        </Grid>
        <Grid item>
          <img
            src="/assets/photos/project detail/gallery/gallery5.png"
            alt="gallery"
            width="210px"
          />
        </Grid>
        <Grid item>
          <img
            src="/assets/photos/project detail/gallery/gallery6.png"
            alt="gallery"
            width="210px"
          />
        </Grid>
        <Grid item>
          <img
            src="/assets/photos/project detail/gallery/gallery7.png"
            alt="gallery"
            width="210px"
          />
        </Grid>
        <Grid item>
          <img
            src="/assets/photos/project detail/gallery/gallery8.png"
            alt="gallery"
            width="210px"
          />
        </Grid>
      </Grid>
    </div>
  );
}
