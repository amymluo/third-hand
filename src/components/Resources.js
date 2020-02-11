import React from "react";
import { Navbar } from "./ComponentExports";

export function Resources(props) {
  return (
    <div className="resources-container">
      <Navbar activeTab="resources" />
      <div className="content">
        <h1>Resources go here.</h1>
      </div>
    </div>
  );
}
