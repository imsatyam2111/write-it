import React from "react";
import { Box, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar2, Sidebar } from "./Navigation";
import { globalTheme } from "../assets/theme";

interface layoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: layoutProps) => {
  return (
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <Box sx={{}}>
        <Navbar2 />
        <Box
          sx={{
            height: "calc(100vh - 70px)",
            maxHeight: "calc(100vh - 70px)",
            overflow: "hidden",
            position: "relative",
            top: 70,
          }}
        >
          <Grid container>
            <Grid item xs={2}>
              <Sidebar />
            </Grid>
            <Grid
              item
              xs={10}
              sx={{ maxHeight: "calc(100vh - 70px)", overflow: "auto" }}
            >
              {children}
            </Grid>
          </Grid>
        </Box>
        {/* <Footer /> */}
      </Box>
    </ThemeProvider>
  );
};
