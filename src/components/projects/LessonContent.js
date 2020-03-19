import React from "react";
import { Typography, Grid } from "@material-ui/core";
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
  const nextLessonId = lessonNum + 1;

  return (
    <div className="lesson-content">
      <Typography variant="h1">{lessonData.title}</Typography>
      <div className="lesson-content__step-container">
        {lessonData.steps.map((step, index) => {
          if (step.type && step.type === "callout") {
            return (
              <div
                key={index}
                className={cx("lesson-content__callout", { block: step.title })}
              >
                {step.title && (
                  <Typography variant="h4">{step.title}</Typography>
                )}
                {step.icon && <img src={step.icon} alt="type" width="48px" />}

                <div className="lesson-content__callout__text">{step.text}</div>
              </div>
            );
          } else {
            return (
              <Grid
                container
                className="lesson-content__step"
                key={index}
                spacing={4}
              >
                <Grid
                  item
                  sm={6}
                  className={cx("lesson-content__step__text", {
                    block: step.title
                  })}
                >
                  {step.num && (
                    <div className="lesson-content__step__num">{step.num}</div>
                  )}
                  {step.title && (
                    <Typography variant="h4">{step.title}</Typography>
                  )}
                  <Typography variant="body1">{step.text}</Typography>
                </Grid>
                <Grid item sm={6}>
                  {step.img && <img src={step.img} alt="step" width="400px" />}
                </Grid>
              </Grid>
            );
          }
        })}
        {hasNextLesson && (
          <Link to={`/projects/${projectId}/${nextLessonId}`}>
            <CustomButton
              variant="contained"
              color="primary"
              style={{ marginTop: "16px" }}
            >
              Next Step
            </CustomButton>
          </Link>
        )}
      </div>
    </div>
  );
}
