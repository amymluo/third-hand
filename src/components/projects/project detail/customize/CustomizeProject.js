import React from "react";
import { Dialog, Tabs, Tab, Typography, Grid } from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { CustomButton } from "../../../ComponentExports";
import cx from "classnames";
import "./customize.scss";

function SelectionRow(props) {
  const { title, selected, options, photos } = props;
  return (
    <div className="selection-row">
      <Typography variant="h4">{title}</Typography>
      <Grid container spacing={2}>
        {options.map((option, index) => {
          return (
            <Grid item key={index}>
              <img
                className={cx("selection-option", {
                  "selection-option__selected": index === selected
                })}
                src={`/assets/icons/project detail/customize${photos[index]}`}
                alt="option"
                width="80pxs"
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
    color: 0,
    size: 0
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLength = (event, newSelection) => {
    setSelection({ ...selections, length: newSelection });
  };

  const handleSize = (event, newSelection) => {
    setSelection({ ...selections, size: newSelection });
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
        ///////////////////////////////// CUSTOMIZE STYLE ///////////////////////////////////
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
              photos={[
                "/neckline/vneck.png",
                "/neckline/widev.png",
                "/neckline/crew.png",
                "/neckline/boat.png"
              ]}
            />
            <SelectionRow
              title={"Sleeves"}
              selected={selections.sleeves}
              options={["short", "3/4 length", "long"]}
              photos={[
                "/sleeves/short.png",
                "/sleeves/3-4.png",
                "/sleeves/long.png"
              ]}
            />
            <div className="selection-row">
              <Typography variant="h4">Length</Typography>
              <div className="toggle-group">
                <ToggleButtonGroup
                  value={selections.length}
                  exclusive
                  onChange={handleLength}
                >
                  <ToggleButton value={0}>crop</ToggleButton>
                  <ToggleButton value={1}>regular</ToggleButton>
                  <ToggleButton value={2}>long</ToggleButton>
                </ToggleButtonGroup>
              </div>
            </div>
            <SelectionRow
              title={"Add-Ons"}
              selected={selections.addons}
              options={[
                "breast pocket",
                "smock pocket",
                "ruffled bottom",
                "side slit"
              ]}
              photos={[
                "/add-ons/breastpocket.png",
                "/add-ons/smock-pocket.png",
                "/add-ons/ruffles.png",
                "/add-ons/side-slit.png"
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
        ///////////////////////////////// SELECT SIZE ///////////////////////////////////
        <div className="customize-dialog__tab">
          <Grid container className="standard-size">
            <Grid item sm={6}>
              <Typography variant="h4">Select a Standard Size</Typography>
            </Grid>
            <Grid item sm={6}>
              <div className="toggle-group">
                <ToggleButtonGroup
                  value={selections.size}
                  exclusive
                  onChange={handleSize}
                >
                  <ToggleButton value={0}>xs</ToggleButton>
                  <ToggleButton value={1}>s</ToggleButton>
                  <ToggleButton value={2}>m</ToggleButton>
                  <ToggleButton value={3}>l</ToggleButton>
                  <ToggleButton value={4}>xl</ToggleButton>
                  <ToggleButton value={5}>xll</ToggleButton>
                </ToggleButtonGroup>
              </div>
              <div>See Size Chart</div>
            </Grid>
          </Grid>
          <Grid container className="custom-size">
            <Grid item sm={6}>
              <Typography variant="h4">Enter Custom Measurements</Typography>
            </Grid>
            <Grid item sm={6}>
              <div className="toggle-group">
                <ToggleButtonGroup
                  value={selections.size}
                  exclusive
                  onChange={handleSize}
                >
                  <ToggleButton value={0}>crop</ToggleButton>
                  <ToggleButton value={1}>regular</ToggleButton>
                  <ToggleButton value={2}>long</ToggleButton>
                </ToggleButtonGroup>
              </div>
              <div>See Size Chart</div>
            </Grid>
          </Grid>
          <CustomButton variant="contained" color="primary" onClick={onClose}>
            Add to cart
          </CustomButton>
        </div>
      )}
    </Dialog>
  );
}
