import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "./create-theme";

type MaterialThemeProps = {} & React.PropsWithChildren;

const theme = createTheme();

export function MaterialTheme({ children }: MaterialThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
