import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/LoginLayout";
import SignupPage from "./SignupPage";
import { DataContext } from "../Contexts/DataContext";
import React from "react";

const RegisterComponent: React.FC = () => {
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
          <SignupPage />
        </Grid>
      </Box>
    </MainLayout>
  );
};
export default RegisterComponent;
