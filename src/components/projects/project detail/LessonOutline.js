import React from "react";
import {
  Typography,
  ExpansionPanelSummary,
  ExpansionPanel,
  ExpansionPanelDetails
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export function LessonOutline(props) {
  return (
    <div
      className="lesson-outline"
      style={{
        marginTop: "150px"
        // border: "3px solid black",
        // padding: "24px 40px 20px 24px"
      }}
    >
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle2">Lesson Outline</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
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
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      {/* <Typography variant="h4">Lesson Outline</Typography>
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
      </ol> */}
    </div>
  );
}
