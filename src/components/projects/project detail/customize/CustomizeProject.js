import React from "react";
import { Dialog, Tabs, Tab, Typography, Grid } from "@material-ui/core";
import { CustomButton } from "../../../ComponentExports";
import cx from "classnames";
import "./customize.scss";

function SelectionRow(props) {
  const { title, selected, options } = props;
  return (
    <div className="selection-row">
      <Typography variant="h4">{title}</Typography>
      <Grid container spacing={2}>
        {options.map((option, index) => {
          return (
            <Grid item key={index}>
              <div
                className={cx("selection-option", {
                  "selection-option__selected": index === selected
                })}
              />
              <Typography
                variant="subtitle2"
                style={{ fontSize: "10px", textAlign: "center" }}
              >
                {option}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export function CustomizeProject(props) {
  const { onClose, open } = props;
  const [value, setValue] = React.useState(0);
  const [selections, setSelection] = React.useState({
    neckline: 0,
    sleeves: 0,
    length: 0,
    addons: null,
    color: 0
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth={false}
      className="customize-dialog"
    >
      <Tabs value={value} onChange={handleChange} indicatorColor="primary">
        <Tab label="customize style" />
        <Tab label="select size" />
      </Tabs>
      {value === 0 ? (
        <Grid container className="customize-dialog__tab" spacing={4}>
          <Grid item sm={6}>
            <img
              src="/assets/photos/project listings/greenshirt.png"
              alt="project img"
              height="420px"
              className="customize-dialog__img"
            />
            <div className="customize-dialog__estimated">
              <Typography variant="subtitle2">
                Estimated project time
              </Typography>
              <Typography variant="h2">5 hrs 30 mins</Typography>
            </div>
          </Grid>
          <Grid item sm={6}>
            <SelectionRow
              title={"Neckline"}
              selected={selections.neckline}
              options={["v-neck", "wide v-neck", "crew neck", "boat neck"]}
            />
            <SelectionRow
              title={"Sleeves"}
              selected={selections.sleeves}
              options={["short", "3/4 length", "long"]}
            />
            <SelectionRow
              title={"Length"}
              selected={selections.sleeves}
              options={["crop", "regular", "long"]}
            />
            <SelectionRow
              title={"Add-Ons"}
              selected={selections.addons}
              options={[
                "breast pocket",
                "smock pocket",
                "ruffled bottom",
                "side slit"
              ]}
            />
            <CustomButton
              variant="contained"
              color="primary"
              onClick={() => setValue(1)}
            >
              next - select size
            </CustomButton>
          </Grid>
        </Grid>
      ) : (
        <div className="customize-dialog__tab">select size</div>
      )}
    </Dialog>
  );
}
