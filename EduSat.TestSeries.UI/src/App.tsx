import { Box, Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/LoginLayout";
// import LoginComponent from "./loginComponents/LoginComponent";
import SigninPage from "./loginComponents/SigninPage";
import SignupPage from "./loginComponents/SignupPage";
import TitleBox from "./loginComponents/TitleBox";

const App: React.FC = () => {
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

export default App;
