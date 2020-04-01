import React from "react";
import { Typography, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { CustomButton } from "../ComponentExports";
import { Link } from "react-router-dom";
import "./checkout.scss";

const ExpansionPanel = withStyles({
  root: {
    borderTop: "3px solid black",
    borderBottom: "3px solid black",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:first-child": {
      borderTop: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    width: "fit-content",
    margin: "12px 0",
    padding: "0 5px",
    minHeight: 36,
    "&$expanded": {
      minHeight: 36,
      backgroundColor: "#EFFF32",
      marginBottom: -1
    }
  },
  content: {
    margin: 0,
    "&$expanded": {
      margin: "0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    display: "block",
    padding: "24px 5px"
  }
}))(MuiExpansionPanelDetails);

export function Checkout(props) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded || panel !== expanded ? panel : false);
  };
  return (
    <div className="checkout">
      <Grid container spacing={8}>
        <Grid item sm={6}>
          <div className="checkout__header">
            <Typography variant="h1" style={{ margin: 0 }}>
              Checkout
            </Typography>
            <Link to="/projects">
              <CustomButton>Back to shopping</CustomButton>
            </Link>
          </div>
          <div className="checkout__expansion">
            <ExpansionPanel
              square
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <ExpansionPanelSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography variant="h4">Sign In</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <form>
                  <TextField
                    fullWidth
                    label="Email"
                    style={{ marginBottom: "16px" }}
                  />
                  <TextField fullWidth type="password" label="Password" />
                </form>
                <div style={{ display: "flex" }}>
                  <CustomButton
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleChange("panel2")();
                      props.login();
                    }}
                    style={{ marginRight: "16px" }}
                  >
                    Log in
                  </CustomButton>
                  <CustomButton variant="outlined">Sign Up</CustomButton>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <ExpansionPanelSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography variant="h4">Shipping</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <form>
                  <TextField fullWidth label="Full Name" />
                  <TextField fullWidth label="Street Address" />
                  <TextField
                    label="Apt (opt)"
                    style={{ marginRight: "48px" }}
                  />
                  <TextField label="City" />
                  <TextField label="State" style={{ marginRight: "48px" }} />
                  <TextField label="Zip Code" />
                  <TextField fullWidth label="Phone Number" />
                </form>
                <CustomButton
                  variant="contained"
                  color="primary"
                  onClick={handleChange("panel3")}
                >
                  Next Step
                </CustomButton>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <ExpansionPanelSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography variant="h4">Delivery</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div className="checkout__shipping-option">
                  <div>Standard Shipping (3-5 business days)</div>
                  <div>$5.00</div>
                </div>
                <div className="checkout__shipping-option">
                  <div>Rush (1-2 business days)</div>
                  <div>$20.00</div>
                </div>
                <CustomButton
                  variant="contained"
                  color="primary"
                  onClick={handleChange("panel4")}
                >
                  Next Step
                </CustomButton>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <ExpansionPanelSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Typography variant="h4">Payment</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <form>
                  <TextField fullWidth label="Card Number" />
                  <TextField label="MM/YY" />
                  <TextField label="CVC" />
                  <TextField label="Zip" />
                </form>
                <CustomButton
                  variant="contained"
                  color="primary"
                  onClick={handleChange("panel5")}
                >
                  Next Step
                </CustomButton>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              square
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <ExpansionPanelSummary
                aria-controls="panel5d-content"
                id="panel5d-header"
              >
                <Typography variant="h4">Confirmation</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="h3">Does everything look good?</Typography>
                <Typography variant="body1">
                  By selecting “Place Order”, I agree to the Terms of Use and
                  acknowledge that I have read the Privacy Policy. Shipping and
                  promotions calculated in checkout.
                </Typography>
                <CustomButton
                  variant="contained"
                  color="primary"
                  onClick={handleChange("panel5")}
                >
                  Place Order
                </CustomButton>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h4" style={{ marginTop: 96 }}>
            Order Summary
          </Typography>
          <div
            style={{
              width: 300,
              height: 400,
              backgroundColor: "gray",
              borderRadius: 8,
              marginTop: 16
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
