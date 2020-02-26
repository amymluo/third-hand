import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography, LinearProgress } from "@material-ui/core";
import { LevelTag, CustomButton } from "../ComponentExports";

import "./ongoing.scss";

export default function OngoingProject() {
  const CustomProgress = withStyles({
    root: {
      height: 21,
      backgroundColor: "#D8D8D8"
    },
    bar: {
      borderRadius: 4,
      backgroundColor: "#EFFF32"
    }
  })(LinearProgress);

  return (
    <div className="ongoing-project">
      <img src="tshirt.jpg" alt="project cover" width="250px" />
      <div className="ongoing-project__content">
        <div className="ongoing-project__content__title-row">
          <div className="ongoing-project__content__title-row__title">
            <Typography variant="h3">Boxy T-Shirt</Typography>
            <LevelTag level={1} />
          </div>
          <Typography variant="subtitle2">~ 2 hours left</Typography>
        </div>
        <Typography className="info-line" variant="subtitle1">
          4 / 9 Shoulder Seams
        </Typography>
        <CustomProgress
          className="info-line"
          variant="determinate"
          value={50}
        />
        <div className="ongoing-project__content__button-row">
          <CustomButton variant="outlined" style={{ marginRight: "24px" }}>
            Project Details
          </CustomButton>
          <CustomButton variant="contained" color="primary">
            Resume
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
