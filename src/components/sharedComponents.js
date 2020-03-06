import React from "react";
import { Button, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export function LevelTag(props) {
  const levels = ["Beginner", "Easy", "Intermediate", "Advanced"];
  return (
    <div
      className="level-tag"
      style={{
        backgroundColor: "#EFFF32",
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: "14px",
        color: "black",
        borderRadius: "4px",
        padding: "4px 21px",
        height: "21px",
        width: "fit-content"
      }}
    >
      {levels[props.level]}
    </div>
  );
}

export const CustomButton = withStyles({
  root: {
    fontFamily: "Poppins",
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "2px",
    padding: "8px 40px"
  }
})(Button);

export const CustomDivider = () => (
  <Divider
    variant="middle"
    style={{ backgroundColor: "black", height: "3px", margin: "64px 0" }}
  />
);
