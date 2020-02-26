import React from "react";
import { Navbar } from "../ComponentExports";
import { ProjectThumbnail } from "./ProjectThumbnail";
import { Grid, Typography, Divider } from "@material-ui/core";
import "./project-detail.scss";

export function ProjectDetail(props) {
  return (
    <div className="project-detail-container">
      <Navbar activeTab="projects" />
      <div className="project-detail">
        <Typography variant="h1">Boxy T-Shirt Kit</Typography>
      </div>
    </div>
  );
}
