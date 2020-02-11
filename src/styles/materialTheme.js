import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#A4A737" },
    secondary: { main: "#E3B1C8" }
  },
  typography: {
    h1: {
      fontFamily: "moret",
      fontSize: 24,
      color: "#2B242D"
    },
    h2: {
      fontFamily: "titling-gothic-fb",
      fontWeight: 300,
      fontSize: 18,
      color: "#2B242D"
    }
  }
});

export default theme;
