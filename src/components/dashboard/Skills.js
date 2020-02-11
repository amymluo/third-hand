import React from "react";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Button
} from "@material-ui/core";
import "./skills.scss";

export function Skills(props) {
  const SkillItem = props => (
    <ListItem className="skills-item">
      <ListItemText primary={props.label} />
      <ListItemSecondaryAction className="review-button">
        <Button>Review</Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
  return (
    <div className={"my-skills"}>
      <Typography variant="h2">My Skills</Typography>
      <List aria-label="my skills list">
        <SkillItem label="pinning" />
        <SkillItem label="pinning" />
        <SkillItem label="pinning" />
      </List>
    </div>
  );
}
