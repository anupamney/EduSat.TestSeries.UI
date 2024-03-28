import { Box, Button, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useNavigate } from "react-router";
import CustomInput from "./CustomInput";
import { register } from "../service/loginService";
import { DataContext } from "../Contexts/DataContext";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const { setIsLoggedIn } = React.useContext(DataContext);

  const tryRegister = async () => {
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    const response = await register(email, password);
    if (response?.status === 200) {
      navigate("/dashboard");
      setIsLoggedIn(true);
      window.localStorage.setItem("isLoggedIn", "true");
    } else {
      console.log("Register failed");
    }
  };

  return (
    <Grid
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      minHeight={550}
      width="60vw !important"
      sx={{
        boxShadow: {
          xs: "",
          sm: "",
          md: "15px 2px 5px -5px",
          lg: "15px 2px 5px -5px",
          xl: "15px 2px 5px -5px",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 24, 57, 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          borderRadius: {
            xs: "30px",
            sm: "30px",
            md: "30px 0 0 30px",
            lg: "30px 0 0 30px",
            xl: "30px 0 0 30px",
          },
        }}
      >
        <Box width="50%">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              sx={{
                mt: "60px",
                width: "250px",
                height: "50px",
                bgcolor: "primary.main",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 20px ${colors.green[500]}`,
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="white">
                EduSat Test Series
              </Typography>
            </Box>

            <Typography
              color="white"
              fontWeight="bold"
              sx={{ textAlign: "center", marginTop: 4, marginBottom: 0 }}
              mt={7}
              mb={1}
            >
              Simplifies connecting, augmenting your career
            </Typography>
            <Typography
              color="white"
              fontWeight="bold"
              sx={{ textAlign: "center", margin: 0 }}
              mt={7}
              mb={3}
            ></Typography>
            <Typography
              color="white"
              fontWeight="bold"
              sx={{ textAlign: "center", marginTop: 4 }}
              mt={7}
              mb={3}
            >
              Sign in to our Portal
            </Typography>
          </Box>

          <CustomInput
            label="Login"
            placeholder="Enter your login..."
            isIconActive={false}
            setData={setEmail}
          />
          <CustomInput
            label="Password"
            placeholder="Enter your password..."
            isIconActive={true}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            setData={setPassword}
          />
          <CustomInput
            label="Confirm Password"
            placeholder="Enter your password again..."
            isIconActive={true}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            setData={setConfirmPassword}
          />

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            mt={2}
            width="100%"
            color="white"
          >
            {/* <div style={{ display: "flex" }}>
              <Checkbox disableRipple sx={{ p: 0, pr: 1 }} />
              <Typography>Remember me</Typography>
            </div> */}
            <Button
              variant="text"
              onClick={() => navigate("/")}
              style={{
                color: colors.green[500],
                textDecoration: "none",
              }}
            >
              Already have an account?
            </Button>
          </Box>
          <Button
            onSubmit={tryRegister}
            // onClick={tryRegister}
            variant="contained"
            fullWidth
            sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default SignupPage;
