import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export default createTheme({

  palette: {
    primary: {
      main: "#3a5cac",
    },
    secondary: {
      main: red[500],
    },
    text: {
      secondary: "#212121",
    },
  },
  typography: {
    fontFamily: ["Montserrat"].join(","),
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },

  components: {
    MuiTextField: {
      defaultProps: {
        sx: {
          "& label": {
            color: "#757575",
          },
          "& .MuiInputLabel-shrink": {
            color: "#212121",
          },

        },
      },
    },

    MuiButton: {
      defaultProps: {
      },
    },
  },
});
