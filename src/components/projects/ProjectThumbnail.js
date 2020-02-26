import React from "react";
import { Typography } from "@material-ui/core";
import { LevelTag, CustomButton } from "../ComponentExports";
import { Link } from "react-router-dom";

export function ProjectThumbnail(props) {
  return (
    <div className="project-thumbnail" style={{ width: "300px" }}>
      <div
        className="project-thumbnail__photo"
        style={{
          width: "264px",
          height: "325px",
          backgroundColor: "gray",
          position: "relative",
          marginTop: "36px",
          marginBottom: "16px"
        }}
      >
        <div
          className="project-level"
          style={{ position: "absolute", top: "8px", right: "8px" }}
        >
          <LevelTag level={0} />
        </div>
      </div>
      <Typography variant="h3" style={{ marginBottom: "8px" }}>
        Other Easy Project
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "8px" }}>
        Recommended starter project for our beginner sewists
      </Typography>
      <CustomButton variant="outlined">
        <Link to="/projects/1">Choose color - $16 </Link>
      </CustomButton>
    </div>
  );
}
