import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/LoginLayout";
import SignupPage from "./SignupPage";
import { DataContext } from "../Contexts/DataContext";
import React from "react";

const LoginComponent: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = React.useContext(DataContext);
  if (isLoggedIn) {
    navigate("/schools");
  }
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
        <Grid container height="90vh" width="120vw">
          <SignupPage />
        </Grid>
      </Box>
    </MainLayout>
  );
};
export default LoginComponent;
