import { Box, useTheme } from "@mui/material";
import { Navbar } from "./Navbar";

export type AppShellProps = {} & React.PropsWithChildren;

export function AppShell({ children }: AppShellProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.grey[100],
      }}
    >
      <Navbar />
      <Box sx={{ padding: "1rem" }}>{children}</Box>
    </Box>
  );
}
