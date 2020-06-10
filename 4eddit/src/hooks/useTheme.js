import { createMuiTheme } from "@material-ui/core";

export const useTheme = () => {
  const MyTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#0079d3",
      },
    },
  });

  return MyTheme;
};
