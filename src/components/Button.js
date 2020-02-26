import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const CustomButton = withStyles({
  root: {
    fontFamily: "Poppins",
    textTransform: "uppercase",
    fontSize: "18px",
    fontWeight: "600",
    letterSpacing: "2px"
  }
})(Button);
