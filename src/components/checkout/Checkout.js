import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { CustomButton } from "../ComponentExports";
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
    margin: "18px 0",
    padding: "0 5px",
    minHeight: 36,
    "&$expanded": {
      minHeight: 36
    }
  },
  content: {
    margin: 0,
    "&$expanded": {
      margin: "0"
    }
  },
  expanded: {
    backgroundColor: "#EFFF32"
  }
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: "24px 5px"
  }
}))(MuiExpansionPanelDetails);

export function Checkout(props) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="checkout">
      <div className="checkout__header">
        <Typography variant="h1">Checkout</Typography>
        <CustomButton>Back to shopping</CustomButton>
      </div>
      <Grid container spacing={8}>
        <Grid item sm={6}>
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
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
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
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
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
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
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
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
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
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        <Grid item sm={6}>
          order summary
        </Grid>
      </Grid>
    </div>
  );
}
