import React from "react";
import { Paper, Typography, List, Divider, Checkbox } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export function ProjectFilters(props) {
  const [checked, setChecked] = React.useState([]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <div className="project-filters" style={{ maxWidth: "250px" }}>
      <Paper>
        <Typography variant="h2" style={{ padding: "16px" }}>
          Filters
        </Typography>
        <Divider />
        <List>
          {[
            "Completed",
            "Uncompleted",
            "Beginner",
            "Intermediate",
            "Advanced"
          ].map((text, index) => (
            <ListItem button key={text} onClick={handleToggle(index)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}
