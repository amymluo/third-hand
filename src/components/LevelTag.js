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
