import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, LinearProgress } from "@material-ui/core";
import { LevelTag, CustomButton } from "../ComponentExports";
import { Link } from "react-router-dom";

import "./ongoing.scss";

export default function OngoingProject() {
  const CustomProgress = withStyles({
    root: {
      height: 16,
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
            <Link to="/projects/1">Project Details</Link>
          </CustomButton>
          <CustomButton variant="contained" color="primary">
            <Link to="/projects/1/1">Resume</Link>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
