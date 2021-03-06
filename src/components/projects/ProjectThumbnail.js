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
      <Link to={`/projects/${props.projectId}`}>
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
      </Link>
      <div
        className="project-level"
        style={{ position: "absolute", top: "44px", right: "44px" }}
      >
        <LevelTag level={projectData.level} />
      </div>
      <div
        className="title-row"
        style={{ display: "flex", alignContent: "center", marginBottom: "8px" }}
      >
        <Typography variant="h4">{projectData.title}</Typography>
        <img
          id="sew-type-icon"
          src={projectData.sewType}
          alt="sew type"
          width="24px"
          style={{ marginLeft: "8px" }}
        />
      </div>
      <Typography variant="body1" style={{ marginBottom: "16px" }}>
        {projectData.description}
      </Typography>
      <Link to={`/projects/${props.projectId}`}>
        <CustomButton variant="outlined">{projectData.buttonText}</CustomButton>
      </Link>
    </div>
  );
}
