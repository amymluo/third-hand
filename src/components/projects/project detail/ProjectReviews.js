import React from "react";
import {
  Grid,
  Typography,
  FormControl,
  Select,
  MenuItem
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { CustomDivider } from "../../ComponentExports";

function Review(props) {
  const state = {
    username: "sewinglady101",
    level: "beginner",
    rating: "4",
    title: "loved this kit!",
    review:
      "I’ve only ever sewn for the first time in Project 1, and this was the perfect second step. It took a bit longer than 5 hours, but it’s worth the cute shirt!",
    date: "02/26/2020",
    photos: [
      "/assets/photos/project detail/reviews/review1.png",
      "/assets/photos/project detail/reviews/review2.png"
    ]
  };
  return (
    <React.Fragment>
      <Grid container spacing={4} className="review">
        <Grid item sm={4}>
          <div>
            <b>{state.username}</b>
          </div>
          <p>Beginner</p>
          <Grid container spacing={1}>
            {state.photos.map((photo, index) => (
              <Grid item key={index}>
                <img src={photo} alt="review" width="100px" />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item sm={8}>
          <Grid container justify="space-between">
            <Grid item>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Grid>
            <Grid item>{state.date}</Grid>
          </Grid>
          <p>
            <b>{state.title}</b>
          </p>
          <p>{state.review}</p>
        </Grid>
      </Grid>
      <CustomDivider />
    </React.Fragment>
  );
}

export function ProjectReviews(props) {
  const [sortBy, setSortBy] = React.useState(0);

  const handleChange = event => {
    setSortBy(event.target.value);
  };

  return (
    <div className="project-reviews">
      <Grid container justify="space-between" style={{ marginBottom: "36px" }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          item
          className="project-reviews__header"
        >
          <Grid item>
            <Typography variant="h3">4.4</Typography>
          </Grid>
          <Grid item>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Grid>
          <Grid item>
            <span>(43 reviews)</span>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          item
          className="project-reviews__header"
        >
          <Grid item>
            <Typography variant="subtitle2">sort by</Typography>
          </Grid>
          <Grid item>
            <FormControl variant="filled">
              <Select value={sortBy} onChange={handleChange}>
                <MenuItem value={0}>Most recent</MenuItem>
                <MenuItem value={1}>High - Low</MenuItem>
                <MenuItem value={2}>Low - High</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Review />
      <Review />
      <Review />
    </div>
  );
}
