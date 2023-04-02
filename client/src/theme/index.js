import { createTheme } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#253658",
      contrastText: "#fff",
    },
    secondary: {
      main: "rgba(37, 54, 88, 0.6)",
    },
    tertiary: {
      main: "rgba(0,171,256,0.08)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

theme = createTheme({
  ...theme,
  typography: {
    fontFamily: [
      "Inter",
      "Courier New, monospace",
      "Brush Script MT, Brush Script Std, cursive",
    ].join(","),
    allVariants: {
      color: [theme.palette.primary.main],
    },
    h1: {
      // "BIGVU 101 Crash Course"
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: 700,
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        lineHeight: "19px",
      },
    },
    h2: {
      // {{course.title}}
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: 700,
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        lineHeight: "19px",
      },
    },
    h3: {
      // {{course.description}}
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: 700,
    },
    h4: {
      // videos button
      fontSize: "14px",
      lineHeight: "17px",
      fontWeight: 400,
      color: "white",
      textTransform: "none",
    },
    h5: {
      // course title in course page
      fontSize: "24px",
      lineHeight: "29px",
      fontWeight: 700,
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
    body1: {
      // course summary
      fontSize: "12px",
      lineHeight: "17px",
      fontWeight: 400,
    },
    body2: {
      // mui list items
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 500,
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        lineHeight: "17px",
      },
    },
    subtitle1: {
      // "Zero editing experience to pro - your ..."
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        lineHeight: "17px",
      },
    },
    subtitle2: {
      // videos in course counter
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 500,
    },
  },
  gradients: [
    {
      // deepocean blue
      initial: "#28B3F7",
      final: "#506AFF",
      linear: "linear-gradient(270deg, #28B3F7 0.65%, #506AFF 99.35%);",
    },
    {
      // greenfield
      initial: "#00EA3B",
      final: "#00D096",
      linear: "linear-gradient(90deg, #00EA3B 0%, #00D096 100%);",
    },
    {
      // sunset
      initial: "#F79F28",
      final: "#FF5350",
      linear: "linear-gradient(270deg, #F79F28 0.65%, #FF5350 99.35%);",
    },
  ],
});

export { theme };
