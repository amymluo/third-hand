import React from "react";
import { Typography } from "@material-ui/core";
import { LevelTag, CustomButton } from "../ComponentExports";
import { Link } from "react-router-dom";
import "./recommended.scss";

export function RecommendedProject(props) {
  return (
    <div className="recommended-project">
      <Typography variant="body1">Because you learned pinning...</Typography>
      <div className="recommended-project__thumbnail">
        <LevelTag level={0} />
      </div>
      <Typography variant="h3" style={{ marginBottom: "24px" }}>
        Other Easy Project
      </Typography>
      <CustomButton variant="outlined">
        <Link to="/projects/1">Choose color - $16 </Link>
      </CustomButton>
    </div>
  );
}
