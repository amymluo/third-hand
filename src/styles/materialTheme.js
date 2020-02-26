import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#000000" },
    secondary: { main: "#EFFF32" }
  },
  typography: {
    h1: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: 48,
      color: "black",
      marginBottom: "48px"
    },
    h2: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: 36,
      color: "black",
      marginBottom: "36px"
    },
    h3: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: 28,
      color: "black"
    },
    body1: {
      fontFamily: "Poppins",
      fontSize: 18
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: 24,
      color: "black"
    },
    subtitle2: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: 21,
      color: "black",
      textTransform: "uppercase"
    }
  }
});

export default theme;
