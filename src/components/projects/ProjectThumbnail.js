import React from "react";
import { Typography } from "@material-ui/core";
import { LevelTag, CustomButton } from "../ComponentExports";

export function ProjectThumbnail(props) {
  return (
    <div className="project-thumbnail" style={{ width: "300px" }}>
      <div
        className="project-thumbnail__photo"
        style={{
          width: "300px",
          height: "375px",
          backgroundColor: "gray",
          position: "relative",
          marginTop: "36px",
          marginBottom: "24px"
        }}
      >
        <div
          className="project-level"
          style={{ position: "absolute", top: "8px", right: "8px" }}
        >
          <LevelTag level={0} />
        </div>
      </div>
      <Typography variant="h3" style={{ marginBottom: "24px" }}>
        Other Easy Project
      </Typography>
      <Typography variant="body1">
        Recommended starter project for our beginner sewists
      </Typography>
      <CustomButton variant="outlined">Choose color - $16</CustomButton>
    </div>
  );
}
