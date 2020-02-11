import React from "react";
import { Navbar } from "./ComponentExports";

export function AllProjects(props) {
  return (
    <div className="projects-container">
      <Navbar activeTab="projects" />
      <div className="content">
        <h1>This is all projects.</h1>
      </div>
    </div>
  );
}
