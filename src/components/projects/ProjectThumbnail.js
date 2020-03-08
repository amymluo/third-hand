import React from "react";
import { Typography } from "@material-ui/core";
import { LevelTag, CustomButton } from "../ComponentExports";
import { Link } from "react-router-dom";
import { projects } from "../../data/projectsData";

export function ProjectThumbnail(props) {
  const projectData = projects[props.projectId];

  return (
    <div
      className="project-thumbnail"
      style={{ width: "300px", position: "relative" }}
    >
      <img
        className="project-thumbnail__photo"
        src={projectData.img}
        style={{
          width: "264px",
          height: "325px",
          marginTop: "36px",
          marginBottom: "16px"
        }}
        alt="project thumbnail"
      />
      <div
        className="project-level"
        style={{ position: "absolute", top: "44px", right: "44px" }}
      >
        <LevelTag level={projectData.level} />
      </div>
      <Typography variant="h4" style={{ marginBottom: "8px" }}>
        {projectData.title}
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "8px" }}>
        {projectData.description}
      </Typography>
      <CustomButton variant="outlined">
        <Link to={`/projects/${props.projectId}`}>
          {projectData.buttonText}
        </Link>
      </CustomButton>
    </div>
  );
}
