import React from "react";
import "./GlobalStyles.css";
import { createTheme, ThemeProvider } from "@mui/material";

function GlobalStyles({ children }) {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
  });
  return (
    <ThemeProvider theme={theme}>{React.Children.only(children)}</ThemeProvider>
  );
}

export default GlobalStyles;
