import { Box, Grid } from "@mui/material";
import MainLayout from "../layouts/LoginLayout";
import SigninPage from "./SigninPage";
import TitleBox from "./TitleBox";
import React from "react";

const LoginComponent: React.FC = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          width: {
            sm: "90vw",
            xs: "90vw",
            md: "60vw",
            lg: "60vw",
            xl: "60vw",
          },
        }}
      >
        <Grid
          container
          height="90vh"
          style={{ flexFlow: "nowrap", justifyContent: "center" }}
        >
          <SigninPage />

          <TitleBox />
        </Grid>
      </Box>
    </MainLayout>
  );
};
export default LoginComponent;
