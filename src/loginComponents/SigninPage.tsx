import {
  Box,
  Button,
  CircularProgress,
  colors,
  Typography,
  Paper,
  Avatar,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import CustomInput from "./CustomInput";
import { login } from "../service/loginService";
import { DataContext } from "../Contexts/DataContext";
import { passwordValidator, emailValidator } from "../utils/inputValidations";
import { useSnackbar } from "notistack";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SigninPage: React.FC = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setIsLoggedIn } = React.useContext(DataContext);
  const [loading, setLoading] = useState(false);

  const tryLogin = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    let errorflag = false;
    if (passwordValidator(password) !== "") {
      enqueueSnackbar(passwordValidator(password), { variant: "error" });
      errorflag = true;
    }
    if (emailValidator(email) !== "") {
      enqueueSnackbar(emailValidator(email), { variant: "error" });
      errorflag = true;
    }
    if (errorflag) {
      setLoading(false);
      return;
    }

    const response = await login(email, password);
    if (response?.data.success) {
      setLoading(false);
      navigate("/schools");
      setIsLoggedIn(true);
      window.localStorage.setItem("isLoggedIn", "true");
    } else {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={tryLogin}>
      <Grid
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        minHeight={550}
        width="40vw !important"
        height="100%"
        sx={{
          boxShadow: {
            xs: "",
            sm: "",
            md: "15px 2px 5px -14px",
            lg: "15px 2px 5px -14px",
            xl: "15px 2px 5px -14px",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(37, 35, 54, 0.8)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            borderRadius: {
              xs: "20px",
              sm: "20px",
              md: "20px 0 0 20px",
              lg: "20px 0 0 20px",
              xl: "20px 0 0 20px",
            },
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
            padding: "40px 30px",
          }}
        >
          <Box
            sx={{
              mb: 4,
              width: "80px",
              height: "80px",
              bgcolor: "primary.main",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 20px ${colors.green[500]}`,
            }}
          >
            <LockOutlinedIcon sx={{ fontSize: 40, color: "white" }} />
          </Box>

          <Typography 
            variant="h4" 
            sx={{ 
              color: "white", 
              fontWeight: "bold", 
              mb: 1,
              textAlign: "center" 
            }}
          >
            Edusat Test Series
          </Typography>

          <Typography
            color="white"
            variant="subtitle1"
            sx={{ 
              textAlign: "center",
              mb: 4,
              opacity: 0.8
            }}
          >
            Effortless Practice, Guaranteed Success
          </Typography>
          
          <Typography
            color="white"
            fontWeight="bold"
            variant="h6"
            sx={{ textAlign: "center", mb: 4 }}
          >
            Sign in to our Portal
          </Typography>

          {/* INPUTS */}
          <Box width="100%" sx={{ mt: 2 }}>
            <CustomInput
              label="Email"
              placeholder="Enter your Email..."
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

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              mt={3}
              width="100%"
              color="white"
            >
              <Button
                variant="text"
                onClick={() => navigate("/register")}
                style={{
                  color: colors.green[300],
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                New User? Register Here
              </Button>
            </Box>

            <Box sx={{ mt: 4, width: "100%" }}>
              {loading ? (
                <Box display="flex" justifyContent="center">
                  <CircularProgress />
                </Box>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ 
                    py: 1.2,
                    borderRadius: 2,
                    fontSize: "1rem",
                    fontWeight: 600,
                    boxShadow: `0 0 20px ${colors.green[500]}` 
                  }}
                >
                  Login
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Grid>
    </form>
  );
};

export default SigninPage;
