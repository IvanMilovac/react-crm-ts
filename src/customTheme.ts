import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    custom: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#13B3F2",
    },
    secondary: {
      main: "#32D97A",
    },
    warning: {
      main: "#F2A444",
    },
    error: {
      main: "#F25C5C",
    },
    info: {
      main: "#F2F2F2",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "custom" },
          style: {
            borderRadius: "100vw",
            padding: "0.5rem 1.25rem",
            border: "2px solid #32D97A",
            backgroundColor: "white",
            color: "#32D97A",
            ":hover": {
              backgroundColor: "#32D97A",
              color: "white",
            },
          },
        },
      ],
    },
  },
});
