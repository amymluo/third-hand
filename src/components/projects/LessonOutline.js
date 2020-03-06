import React from "react";
import { Typography } from "@material-ui/core";

export function LessonOutline(props) {
  return (
    <div
      className="lesson-outline"
      style={{
        border: "3px solid black",
        padding: "24px 40px 20px 24px",
        width: "fit-content"
      }}
    >
      <Typography variant="h4">Lesson Outline</Typography>
      <ol>
        <li>Understand Your Materials</li>
        <li>Pattern Cutting</li>
        <li>Finish Body Edge</li>
        <li>Shoulder Seams</li>
        <li>Sew on Sleeves</li>
        <li>Sew Sides & Slit</li>
        <li>Hem Sleeve Openings</li>
        <li>Bind Neck</li>
        <li>Hem Bottom</li>
      </ol>
    </div>
  );
}
