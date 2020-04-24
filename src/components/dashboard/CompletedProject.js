import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, LinearProgress } from "@material-ui/core";
import { LevelTag, CustomButton } from "../ComponentExports";
import { Link } from "react-router-dom";

import "./ongoing.scss";

export function CompletedProject() {
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
        src="/assets/photos/project listings/totebag.png"
        alt="project cover"
        width="250px"
      />
      <div className="ongoing-project__content">
        <div className="ongoing-project__content__title-row">
          <div className="ongoing-project__content__title-row__title">
            <Typography variant="h3">Boxy T-Shirt</Typography>
            <LevelTag level={1} />
          </div>
        </div>
        <Typography className="info-line" variant="subtitle1">
          9 / 9 Complete
        </Typography>
        <CustomProgress
          className="info-line"
          variant="determinate"
          value={100}
        />
        <div className="ongoing-project__content__button-row">
          <CustomButton variant="outlined" style={{ marginRight: "24px" }}>
            <Link to="/projects/1">Share on Gallery</Link>
          </CustomButton>
          <CustomButton variant="contained" color="primary">
            Review
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
