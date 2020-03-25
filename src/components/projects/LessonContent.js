import React from "react";
import {
  Typography,
  Grid,
  Drawer,
  List,
  ListItem,
  IconButton,
  ListItemText,
  Divider
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { lessons } from "../../data/lessonData";
import { Link } from "react-router-dom";
import cx from "classnames";

import "./lesson-content.scss";
import { CustomButton } from "../sharedComponents";

export function LessonContent(props) {
  const { projectId, lessonId } = props.match.params;
  const lessonData = lessons[lessonId];
  const lessonNum = parseInt(lessonId);
  const hasNextLesson = lessons.hasOwnProperty(lessonNum + 1);

  const [menuOpen, setMenu] = React.useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenu(open);
  };

  const list = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <div className="lesson-content">
        <Typography variant="h1">{lessonData.title}</Typography>
        <div className="lesson-content__step-container">
          {lessonData.steps.map((step, index) => {
            if (step.type && step.type === "callout") {
              return (
                <div
                  key={index}
                  className={cx("lesson-content__callout", {
                    block: step.title
                  })}
                >
                  {step.title && (
                    <Typography variant="h4">{step.title}</Typography>
                  )}
                  {step.icon && <img src={step.icon} alt="type" width="48px" />}

                  <div className="lesson-content__callout__text">
                    {step.text}
                  </div>
                </div>
              );
            } else {
              return (
                <Grid
                  container
                  className="lesson-content__step"
                  key={index}
                  spacing={10}
                >
                  <Grid
                    item
                    sm={6}
                    className={cx("lesson-content__step__text", {
                      block: step.title
                    })}
                  >
                    {step.num && (
                      <div className="lesson-content__step__num">
                        {step.num}
                      </div>
                    )}
                    {step.title && (
                      <Typography variant="h4">{step.title}</Typography>
                    )}
                    <Typography variant="body1">{step.text}</Typography>
                  </Grid>
                  <Grid item sm={6}>
                    {step.img && (
                      <img src={step.img} alt="step" width="400px" />
                    )}
                  </Grid>
                </Grid>
              );
            }
          })}
        </div>
      </div>
      <div className="lesson-content__nav">
        <Grid container justify="space-between" alignItems="center">
          <Grid item className="lesson-content__nav__menu">
            <IconButton
              onClick={toggleDrawer(true)}
              style={{ marginRight: "16px" }}
            >
              <MenuIcon />
            </IconButton>
            {lessonId}. {lessonData.title}
          </Grid>
          <Grid item className="lesson-content__nav__buttons">
            {lessonNum > 1 && (
              <Link to={`/projects/${projectId}/${lessonNum - 1}`}>
                <CustomButton variant="outlined" color="primary">
                  Previous
                </CustomButton>
              </Link>
            )}

            <span className="pagination">{lessonId}/9</span>

            {hasNextLesson && (
              <Link to={`/projects/${projectId}/${lessonNum + 1}`}>
                <CustomButton variant="contained" color="primary">
                  Next
                </CustomButton>
              </Link>
            )}
          </Grid>
        </Grid>
      </div>
      <Drawer anchor={"left"} open={menuOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </React.Fragment>
  );
}
