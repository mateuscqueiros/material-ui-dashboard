import { Box, Typography, useTheme } from "@mui/material";
import { IconGraph } from "@tabler/icons-react";

export type NavbarProps = {};
export type NavbarButtonProps = {
  Icon: typeof IconGraph;
  label: string;
};

const navbarData: NavbarButtonProps[] = [
  {
    Icon: IconGraph,
    label: "Dashboard",
  },
];

export function NavbarButton({ Icon, label }: NavbarButtonProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "1rem 0.5rem 0.75rem",
        backgroundColor: "#1877F266",
        borderRadius: "0.5rem",
        color: "",
      }}
    >
      <Box>{<Icon />}</Box>
      <Typography>{label}</Typography>
    </Box>
  );
}

export function Navbar({}: NavbarProps) {
  return (
    <Box
      sx={{
        borderRight: "1px solid #919eab14",
      }}
      height="100%"
      width="300px"
    >
      {navbarData.map((data) => (
        <NavbarButton {...data} />
      ))}
    </Box>
  );
}
