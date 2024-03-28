import { Box, Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/LoginLayout";
import SigninPage from "./SigninPage";
import SignupPage from "./SignupPage";
import TitleBox from "./TitleBox";

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
        <Routes>
          <Route
            path="/"
            element={
              <Grid container height="90vh">
                <SigninPage />

                <TitleBox />
              </Grid>
            }
          />
          <Route
            path="/register"
            element={
              <Grid container height="90vh" width="120vw">
                <SignupPage />
              </Grid>
            }
          />
        </Routes>
      </Box>
    </MainLayout>
  );
};
export default LoginComponent;
