import React from "react";
import { Dialog, Tabs, Tab, Box, Typography, Grid } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return <div className="tabpanel">{value === index && children}</div>;
}

export function CustomizeProject(props) {
  const { onClose, open } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog onClose={onClose} open={open} maxWidth="false">
      <Tabs value={value} onChange={handleChange} indicatorColor="primary">
        <Tab label="customize style" />
        <Tab label="select size" />
      </Tabs>
      {value === 0 ? (
        <Grid container className="tabpanel1" style={{ width: "900px" }}>
          <Grid item sm={6}>
            <img
              src="/assets/photos/project listings/greenshirt.png"
              alt="project img"
              height="420px"
            />
            <div className="est-time">
              <Typography variant="subtitle2">
                Estimated project time
              </Typography>
              <Typography variant="h2">5 hrs 30 mins</Typography>
            </div>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="h4">Neckline</Typography>
            <Grid container spacing={3}>
              <Grid item>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "3px",
                    backgroundColor: "gray"
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "3px",
                    backgroundColor: "gray"
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "3px",
                    backgroundColor: "gray"
                  }}
                />
              </Grid>
            </Grid>
            <Typography variant="h4">Neckline</Typography>
            <Grid container spacing={3}>
              <Grid item>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "3px",
                    backgroundColor: "gray"
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "3px",
                    backgroundColor: "gray"
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "3px",
                    backgroundColor: "gray"
                  }}
                />
              </Grid>
            </Grid>
            <Typography variant="h4">Neckline</Typography>
            <Grid container spacing={3}>
              <Grid item>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "3px",
                    backgroundColor: "gray"
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "3px",
                    backgroundColor: "gray"
                  }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "3px",
                    backgroundColor: "gray"
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <div className="tabpanel2">select size</div>
      )}
    </Dialog>
  );
}
