import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { CustomButton, CustomDivider } from "../ComponentExports";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";

import "./cart.scss";

export function Cart(props) {
  return (
    <div className="your-cart">
      <Typography variant="h1">Your Cart</Typography>
      <Grid container alignItems="center" justify="flex-end" spacing={5}>
        <Grid item sm={1}>
          Quantity
        </Grid>
        <Grid item sm={1}>
          Price
        </Grid>
        <Grid item sm={1}>
          Total
        </Grid>
      </Grid>
      <CustomDivider />
      <Grid container spacing={5}>
        <Grid item sm={3}>
          <img
            src="/assets/photos/project listings/greenshirt.png"
            alt="project img"
            width="100%"
          />
        </Grid>
        <Grid item sm={6}>
          <div className="your-cart__heading-row">
            <Typography variant="h3">Boxy T-Shirt</Typography>
            <div className="icon-row">
              <CreateIcon /> <DeleteIcon />
            </div>
          </div>
          <div className="your-cart__color-row">
            <span className="category">Color</span>
            <div className="your-cart__color-swatch" /> Mint
          </div>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <div className="category">Size</div>
              <ul>
                <li>Bust: 38 in.</li>
                <li>Chest: 32 in.</li>
                <li>Shoulder: 41 in.</li>
                <li>Height: 5ft. 8in.</li>
              </ul>
            </Grid>
            <Grid item xs={6}>
              <div className="category">Customizations</div>
              <ul>
                <li>Bust: 38 in.</li>
                <li>Chest: 32 in.</li>
                <li>Shoulder: 41 in.</li>
                <li>Height: 5ft. 8in.</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={1}>
          1
        </Grid>
        <Grid item sm={1}>
          $24.00
        </Grid>
        <Grid item sm={1}>
          $24.00
        </Grid>
      </Grid>
      <CustomDivider />
      <Typography variant="h3">Total Price: $24.00</Typography>
      <Link to="/checkout">
        <CustomButton
          variant="contained"
          color="primary"
          style={{ marginTop: "24px" }}
        >
          Check Out
        </CustomButton>
      </Link>
    </div>
  );
}
