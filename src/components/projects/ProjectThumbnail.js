import React from "react";
import { Card, CardMedia, CardContent } from "@material-ui/core";

export function ProjectThumbnail(props) {
  return (
    <Card>
      <CardMedia
        image="tshirt.jpg"
        title="tshirt"
        style={{ width: "180px", height: "180px" }}
      />
      <CardContent>Boxy T Shirt</CardContent>
    </Card>
  );
}
