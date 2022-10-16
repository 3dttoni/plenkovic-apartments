import { Theme, createTheme } from "@mui/material";

export function getTheme(): Theme {
  const secondary = {
    main: "#0097a7",
    light: "#56c8d8",
    dark: "#006978",
    contrastText: "#fafafa",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f5f5f5",
        light: "#ffffff",
        dark: "#c2c2c2",
        contrastText: "#000000",
      },
      secondary,
      info: secondary,
    },
  });
  return theme;
}
