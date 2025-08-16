import { createTheme } from "@mui/material/styles";

export const Themes = createTheme({
  palette: {
    primary: {
      main: "#2a6049",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fcf8f4",
      contrastText: "#2a6049",
    },
    neutral: {
      main: "#fff",
      contrastText: "#000",
    },
    orange: {
      main: "#f4852b",
      contrastText: "fff",
    },
    background: {
      default: "#fcf8f4",
    },
    typography: {
      fontFamily: `TIBch, "Diatype T", "Segoe UI", "Helvetica Neue", Arial, "Hiragino Sans GB", "PingFang SC", "Heiti SC", "Noto Sans CJK SC", "Source Han Sans SC", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif`,
    },
  },
});
