import {
  Box,
  Button,
  CircularProgress,
  colors,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Fade,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../service/loginService";
import { DataContext } from "../Contexts/DataContext";
import { passwordValidator, emailValidator } from "../utils/inputValidations";
import { useSnackbar } from "notistack";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';

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
    <Fade in={true} timeout={800}>
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
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(10px)",
              padding: "40px 30px",
              transition: "all 0.3s ease",
              '&:hover': {
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
              }
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
                animation: "pulse 2s infinite",
                "@keyframes pulse": {
                  "0%": {
                    boxShadow: `0 0 0 0 rgba(76, 175, 80, 0.7)`,
                  },
                  "70%": {
                    boxShadow: `0 0 0 15px rgba(76, 175, 80, 0)`,
                  },
                  "100%": {
                    boxShadow: `0 0 0 0 rgba(76, 175, 80, 0)`,
                  },
                },
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
                textAlign: "center",
                background: 'linear-gradient(45deg, #4CAF50, #2196F3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
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
                opacity: 0.9,
                fontStyle: "italic",
                letterSpacing: "0.5px"
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
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                    </InputAdornment>
                  ),
                }}
                margin="normal"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: colors.green[400],
                    },
                    color: 'white',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: colors.green[400],
                  },
                }}
              />
              
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                placeholder="Enter your password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                margin="normal"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: colors.green[400],
                    },
                    color: 'white',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: colors.green[400],
                  },
                }}
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
                  sx={{
                    color: colors.green[300],
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    '&:hover': {
                      color: colors.green[500],
                      background: 'rgba(255, 255, 255, 0.05)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  New User? Register Here
                </Button>
              </Box>

              <Box sx={{ mt: 4, width: "100%" }}>
                {loading ? (
                  <Box display="flex" justifyContent="center">
                    <CircularProgress color="primary" />
                  </Box>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    endIcon={<LoginIcon />}
                    sx={{ 
                      py: 1.2,
                      borderRadius: 3,
                      fontSize: "1rem",
                      fontWeight: 600,
                      boxShadow: `0 0 20px ${colors.green[500]}`,
                      background: 'linear-gradient(45deg, #4CAF50, #2196F3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #2E7D32, #1565C0)',
                        transform: 'translateY(-2px)',
                        boxShadow: `0 5px 20px ${colors.green[500]}`,
                      }
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
    </Fade>
  );
};

export default SigninPage;
