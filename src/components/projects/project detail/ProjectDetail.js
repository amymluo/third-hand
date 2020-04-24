import React from "react";
import {
  LessonOutline,
  LevelTag,
  CustomButton,
  ProjectReviews,
  CustomizeProject,
  ProjectGallery,
  Commitment
} from "../../ComponentExports";
import { Grid, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import "./project-detail.scss";

export function ProjectDetail(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div className="project-detail">
      <Grid container spacing={5} className="project-detail__overview">
        <Grid item sm={6}>
          <img
            src="/assets/photos/project listings/greenshirt.png"
            alt="project img"
            width="500px"
          />
        </Grid>
        <Grid item sm={6} style={{ marginBottom: "24px" }}>
          <div className="project-detail__overview__heading">
            <LevelTag level={1} />
            <span>Requires a sewing machine</span>
          </div>
          <Typography variant="h1" style={{ marginBottom: "24px" }}>
            Boxy T-Shirt
          </Typography>
          <Rating
            value={4.4}
            precision={0.1}
            size="large"
            readOnly
            style={{ marginTop: "-8px" }}
          />
          <p style={{ margin: "24px 0 44px 0", fontSize: "18px" }}>
            Practice your sewing skills with this wardrobe staple. Customize the
            pattern below for a shirt that is truly one-of-a-kind. With
            easy-to-follow lessons suitable for anybody who knows how to use a
            sewing machine, you’ll be rocking a new shirt in no time.
          </p>
          {props.isAuthenticated ? (
            <Link to={"/projects/1/1"}>
              <CustomButton variant="contained" color="primary">
                Resume
              </CustomButton>
            </Link>
          ) : (
            <CustomButton
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              customize size & style
            </CustomButton>
          )}
          <LessonOutline />
        </Grid>
      </Grid>
      <Grid container className="project-detail__kit-contents">
        <Grid item sm="4">
          <img
            src="/assets/photos/project detail/materials.png"
            alt="materials"
            width="100%"
          />
        </Grid>
        <Grid item sm="8" style={{ padding: 36 }}>
          <Typography variant="h3">What You Get</Typography>
          <ul style={{ fontSize: "18px" }}>
            <li>
              The right amount of fabric you will need for your custom project
              (around 2 yards)
            </li>
            <li>2 spools organic cotton thread</li>
            <li>
              A printed paper pattern specific to your size and style selections
            </li>
            <li>Access to step-by-step online instructions</li>
          </ul>
        </Grid>
      </Grid>
      {/* <div className="project-detail__kit-contents">
        <div className="project-detail__kit-contents__left">
          <Typography variant="h4">Includes</Typography>
          <Grid container spacing={6} justify="space-evenly">
            <Grid item>
              <img
                className="project-detail__kit-contents__icon"
                src="/assets/icons/project detail/fabric.png"
                alt="fabric"
              />
              <div className="project-detail__kit-contents__title">
                Fabric & Notions
              </div>
            </Grid>
            <Grid item>
              <img
                className="project-detail__kit-contents__icon"
                src="/assets/icons/project detail/pattern.png"
                alt="pattern"
              />
              <div className="project-detail__kit-contents__title">
                Customized Pattern
              </div>
            </Grid>
            <Grid item>
              <img
                className="project-detail__kit-contents__icon"
                src="/assets/icons/project detail/computer.png"
                alt="computer"
              />
              <div className="project-detail__kit-contents__title">
                Step-by-step Online Lesson
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="project-detail__kit-contents__right">
          <Typography variant="h4">What You Get</Typography>
          <ul>
            <li>2 yards fabric (recovered from the landfill)</li>
            <li>2 spools organic cotton thread</li>
            <li>Printed customized paper pattern</li>
            <li>Access to step-by-step online instructions</li>
          </ul>
        </div>
      </div> */}
      <div className="project-detail__section">
        <ProjectReviews />
      </div>
      <div className="project-detail__section">
        <ProjectGallery />
      </div>
      <div className="project-detail__section">
        <Commitment />
      </div>
      <CustomizeProject onClose={handleClose} open={open} />
    </div>
  );
}
