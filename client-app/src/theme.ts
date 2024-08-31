import { BorderColor } from "@mui/icons-material";
import { colors, createTheme } from "@mui/material";

const baseTheme = createTheme({
  typography: {
    fontFamily: "roboto",
    fontWeightLight: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#06101C",
    },
    secondary: {
      main: "#050e18",
    },
    common: {
      white: "#fff",
      black: "#000",
    },
    background: {
      default: "#06101C",
      paper: "#050e18",
    },
    text: {
      primary: "#94A0B8",
    },
    mode: "dark",
  },
  typography: {
    body1: {
      color: "#94A0B8",
      fontFamily: "sans-serif",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#05070a",
          color: "#ffffff",
          border: "1px solid #333c4d99",
          borderRadius: "8px",
          height: "2.5rem",
          "&.Mui-focused": {
            BorderColor: "#027AF2",
            transition: "border 120ms ease-in;",
            outline: "rgba(2, 107, 212, 0.5) solid 3px",
          },
          "& :hover": {
            BorderColor: "#566481",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "contained" },
              style: {
                background: "#3c83f6",
                fontWeight: "600",
                "& :hover": {
                  background: "#ffffff",
                },
              },
            },
            {
              props: { variant: "text" },
              style: {
                color: "#ffffff",
              },
            },
          ],
          borderRadius: "8px",
          textTransform: "capitalize",
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: "#fff",
    },
    mode: "light",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          background: "#ffffff",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#ffffff",
          color: "#000000",
        },
      },
    },
  },
});
