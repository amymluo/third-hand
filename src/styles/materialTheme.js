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
      fontSize: 36,
      color: "black",
      marginBottom: "36px"
    },
    h2: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: 28,
      color: "black",
      marginBottom: "28px"
    },
    h3: {
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: 18,
      color: "black"
    },
    body1: {
      fontFamily: "Poppins",
      fontSize: 14
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: 16,
      color: "black"
    },
    subtitle2: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: 16,
      color: "black",
      textTransform: "uppercase"
    }
  }
});

export default theme;
