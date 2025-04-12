import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import MainLayout from "../layouts/LoginLayout";
import SigninPage from "./SigninPage";
import TitleBox from "./TitleBox";
import React from "react";

const LoginComponent: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <MainLayout>
      <Box
        sx={{
          width: {
            sm: "90vw",
            xs: "90vw",
            md: "80vw",
            lg: "75vw",
            xl: "70vw",
          },
          maxWidth: "1400px",
        }}
      >
        <Grid
          container
          height="90vh"
          style={{ 
            flexFlow: "nowrap", 
            justifyContent: "center",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
          }}
        >
          {!isMobile && <TitleBox />}
          <SigninPage />
          {isMobile && <TitleBox />}
        </Grid>
      </Box>
    </MainLayout>
  );
};
export default LoginComponent;
