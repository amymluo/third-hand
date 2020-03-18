import React from "react";
import {
  Grid,
  Typography,
  FormControl,
  Select,
  MenuItem
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { CustomDivider } from "../../ComponentExports";
import { reviews } from "../../../data/reviews";

function Review(props) {
  const { username, level, rating, date, title, review, photos } = props;
  return (
    <React.Fragment>
      <Grid container spacing={4} className="review">
        <Grid item sm={4}>
          <div>
            <b>{username}</b>
          </div>
          <p>{level}</p>
          <Grid container spacing={1}>
            {photos &&
              photos.map((photo, index) => (
                <Grid item key={index}>
                  <img src={photo} alt="review" width="100px" />
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Grid item sm={8}>
          <Grid container justify="space-between">
            <Grid item>
              <Rating value={parseInt(rating)} precision={0.1} readOnly />
            </Grid>
            <Grid item>{date}</Grid>
          </Grid>
          <p>
            <b>{title}</b>
          </p>
          <p>{review}</p>
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
            <Rating value={4.4} precision={0.1} size="large" readOnly />
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
      {reviews.map((review, index) => {
        return <Review {...review} key={index} />;
      })}
    </div>
  );
}
