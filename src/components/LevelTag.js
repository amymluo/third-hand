import React from "react";

export function LevelTag(props) {
  const levels = ["Beginner", "Easy", "Intermediate", "Advanced"];
  return (
    <div
      className="level-tag"
      style={{
        backgroundColor: "#EFFF32",
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: "21px",
        color: "black",
        borderRadius: "4px",
        padding: "4px 32px 6px 32px",
        height: "32px",
        width: "fit-content"
      }}
    >
      {levels[props.level]}
    </div>
  );
}
