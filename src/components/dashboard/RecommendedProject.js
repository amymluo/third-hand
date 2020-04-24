import React from "react";
import { Typography } from "@material-ui/core";
import { LevelTag, CustomButton } from "../ComponentExports";
import { Link } from "react-router-dom";
import "./recommended.scss";
import { ProjectThumbnail } from "../projects/ProjectThumbnail";

export function RecommendedProject(props) {
  return (
    <div className="recommended-project">
      <Typography variant="body1">
        Because you learned <b>{props.skill}...</b>
      </Typography>
      <ProjectThumbnail projectId={props.projectId} />
    </div>
  );
}
