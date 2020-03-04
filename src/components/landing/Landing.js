import React from "react";
import { CustomButton } from "../ComponentExports";
import "./landing.scss";
import { Grid, Typography, Divider } from "@material-ui/core";

export function Landing(props) {
  return (
    <div className="landing">
      <div className="landing__hero">
        <img
          id="hero2"
          src="assets/photos/homepage/homepage- hero 2.png"
          alt="hero-2"
        />
        <img
          id="hero1"
          src="assets/photos/homepage/homepage- hero 1.png"
          alt="hero-1"
        />

        <div className="landing__hero-h1">Make & Mend</div>
        <div className="landing__hero-h2">
          for a happier planet
          <img
            style={{ verticalAlign: "middle" }}
            src="assets/icons/global/smiley-face.png"
            width="60px"
            alt="smiley face"
          />
        </div>
        <p className="landing__hero-subtitle">
          Sustainable sewing project kits that will help you love your clothes
          for longer
        </p>
        <CustomButton variant="contained" color="primary">
          Get Started
        </CustomButton>
      </div>

      <Grid
        container
        className="landing__steps"
        style={{ flexWrap: "nowrap" }}
        spacing={10}
      >
        <Grid item>
          <div className="landing__steps-container">
            <img
              className="landing__steps-icon"
              src="assets/icons/home/shirt.png"
              alt="step 1 icon"
            ></img>
            <img
              className="landing__steps-step"
              src="assets/icons/home/numbers/number1.png"
              alt="step1"
            ></img>
            <div className="landing__steps-title">Pick your project</div>
            <Typography className="landing__steps-description">
              We offer customizable sizing and colors to make each project truly
              yours.
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <div className="landing__steps-container">
            <img
              className="landing__steps-icon"
              src="assets/icons/home/box.png"
              alt="step 2 icon"
            ></img>
            <img
              className="landing__steps-step"
              src="assets/icons/home/numbers/number2.png"
              alt="step2"
            ></img>
            <div className="landing__steps-title">Unpack your kit</div>
            <Typography className="landing__steps-description">
              Get all of the materials and tools you’ll need - always
              sustainably sourced.
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <div className="landing__steps-container">
            <img
              className="landing__steps-icon"
              src="assets/icons/home/sewing_machine.png"
              alt="step 3 icon"
            ></img>
            <img
              className="landing__steps-step"
              src="assets/icons/home/numbers/number3.png"
              alt="step3"
            ></img>
            <div className="landing__steps-title">Make something</div>
            <Typography className="landing__steps-description">
              With easy-to-follow online instructions, you will feel confident
              at any skill level.
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Divider
        variant="middle"
        style={{ backgroundColor: "black", height: "3px", margin: "84px 0" }}
      />
    </div>
  );
}
