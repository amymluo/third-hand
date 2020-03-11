import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { lessons } from "../../data/lessonData";
import { Link } from "react-router-dom";

import "./lesson-content.scss";

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
          return (
            <Grid
              container
              className="lesson-content__step"
              key={index}
              spacing={4}
            >
              <Grid item sm={6} className="lesson-content__step__text">
                <div className="lesson-content__step__num">{index + 1}</div>
                <Typography variant="body1">{step.text}</Typography>
              </Grid>
              <Grid item sm={6}>
                {step.img && <img src={step.img} alt="step" />}
              </Grid>
            </Grid>
          );
        })}
        {hasNextLesson && (
          <Button variant="contained" color="primary">
            <Link to={`/projects/${projectId}/${nextLessonId}`}>Next Step</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
