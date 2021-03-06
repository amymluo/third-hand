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
      backgroundColor: "black"
    }
  })(LinearProgress);

  return (
    <div className="ongoing-project">
      <img
        src="/assets/photos/project listings/greenshirt.png"
        alt="project cover"
        width="250px"
      />
      <div className="ongoing-project__content">
        <div className="ongoing-project__content__title-row">
          <div className="ongoing-project__content__title-row__title">
            <Typography variant="h3">Boxy T-Shirt</Typography>
            <LevelTag level={1} />
          </div>
          <Typography variant="subtitle2">~ 2 hours left</Typography>
        </div>
        <Typography className="info-line" variant="subtitle1">
          6 / 9 Sew Sides
        </Typography>
        <CustomProgress
          className="info-line"
          variant="determinate"
          value={66}
        />
        <div className="ongoing-project__content__button-row">
          <Link to="/projects/1">
            <CustomButton variant="outlined" style={{ marginRight: "24px" }}>
              Project Details
            </CustomButton>
          </Link>
          <Link to="/projects/1/6">
            <CustomButton variant="contained" color="primary">
              Resume
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
