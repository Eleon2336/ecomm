import { Box, Typography, styled } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez";

//container
export const AppbarContainer = styled(Box)(() => ({
    display: "flex",
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: "2px 8px"
}));

//header
export const AppbarHeader = styled(Typography)(() => ({
    padding: "4px",
    flexGrow: 1,
    fontSize: "4em",
    fontFamily: '"Montez", "cursive"',
    color: Colors.secondary
}));