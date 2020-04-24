import React from "react";
import { ProjectThumbnail } from "./ProjectThumbnail";
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl
} from "@material-ui/core";
import { CustomDivider } from "../ComponentExports";
import SearchIcon from "@material-ui/icons/Search";

export function AllProjects(props) {
  return (
    <div className="projects" style={{ padding: "24px 24px 48px 48px" }}>
      <Grid container className="project-section">
        <Grid item sm="3" style={{ padding: "36px 36px 0 0" }}>
          <Typography variant="h3">Start from Scratch</Typography>
          <Typography variant="body1" style={{ marginTop: 16 }}>
            Project kits with all of the materials you need to make a beautiful
            finished product
          </Typography>
          <div className="sort-filter" style={{ marginTop: 48 }}>
            <Typography variant="subtitle2">Search By</Typography>
            <TextField
              dense
              variant="filled"
              value={"keywords..."}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
              style={{ marginBottom: "24px" }}
            />
            <Typography variant="subtitle2">Filter By</Typography>
            <FormControl variant="filled">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={0}
              >
                <MenuItem value={0} disabled>
                  Difficulty
                </MenuItem>
                <MenuItem value={10}>Easy</MenuItem>
                <MenuItem value={20}>Intermediate</MenuItem>
                <MenuItem value={30}>Hard</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
        <Grid item container sm="9">
          <Grid item>
            <ProjectThumbnail projectId={0} />
          </Grid>
          <Grid item>
            <ProjectThumbnail projectId={1} />
          </Grid>
          <Grid item>
            <ProjectThumbnail projectId={2} />
          </Grid>
        </Grid>
      </Grid>
      <CustomDivider />
      <Grid container className="project-section">
        <Grid item sm="3" style={{ padding: "36px 36px 0 0" }}>
          <Typography variant="h3">Repair + Embellishh</Typography>
          <Typography variant="body1" style={{ marginTop: 16 }}>
            Project kits that come with exactly what you need to fix or beautify
            your existing clothing.
          </Typography>
        </Grid>
        <Grid container item sm={9}>
          <Grid item>
            <ProjectThumbnail projectId={3} />
          </Grid>
          <Grid item>
            <ProjectThumbnail projectId={4} />
          </Grid>
          <Grid item>
            <ProjectThumbnail projectId={5} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
