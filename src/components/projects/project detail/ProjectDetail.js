import React from "react";
import {
  LessonOutline,
  LevelTag,
  CustomButton,
  ProjectReviews,
  CustomizeProject
} from "../../ComponentExports";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./project-detail.scss";

export function ProjectDetail(props) {
  const [open, setOpen] = React.useState(true); //false

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div className="project-detail">
      <div className="project-detail__overview">
        <Grid
          container
          className="project-detail__overview__heading"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <div className="project-detail__overview__title">
              <Typography variant="h1">Boxy T-Shirt Kit</Typography>
              <LevelTag level={1}></LevelTag>
            </div>
          </Grid>
          <Grid item>
            {props.isAuthenticated ? (
              <CustomButton variant="contained" color="primary">
                <Link to={"/projects/1/1"}>Resume</Link>
              </CustomButton>
            ) : (
              <CustomButton
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
              >
                customize & add to cart
              </CustomButton>
            )}
          </Grid>
        </Grid>
        <Typography variant="body1" style={{ marginBottom: "36px" }}>
          Practice your sewing skills with this wardrobe staple. Customize the
          pattern below for a shirt that is truly one-of-a-kind. With
          easy-to-follow lessons suitable for anybody who knows how to use a
          sewing machine, you’ll be rocking a new shirt in no time.
        </Typography>
        <Grid container justify="space-between">
          <Grid item>
            <LessonOutline />
          </Grid>
          <Grid item>
            <img
              src="/assets/photos/project listings/greenshirt.png"
              alt="project img"
              height="420px"
            />
          </Grid>
        </Grid>
      </div>
      <div className="project-detail__kit-contents">
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
      </div>
      <div className="project-detail__reviews">
        <ProjectReviews />
      </div>
      <CustomizeProject onClose={handleClose} open={open} />
    </div>
  );
}
