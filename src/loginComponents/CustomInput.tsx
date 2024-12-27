import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { colors } from "../theme";

const CustomInput: React.FC<{
  isIconActive: boolean;
  label: string;
  placeholder: string;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
  setData?: React.Dispatch<React.SetStateAction<string>>;
}> = ({
  isIconActive,
  label,
  placeholder,
  showPassword,
  setShowPassword,
  setData,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="flex-start"
      mb={2}
    >
      <Box display="flex" flexDirection="column" justifyContent="flex-start">
        <Typography color="white" pb={1}>
          {label}
        </Typography>

        <Paper
          sx={{
            background: colors.input[500],
            width: "100%",
          }}
        >
          <InputBase
            autoComplete="on"
            placeholder={placeholder}
            fullWidth
            sx={{
              bgcolor: colors.input[500],
              p: 1,
              borderRadius: "5px",
            }}
            onChange={(e) => {
              setData && setData(e.target.value);
            }}
            type={!showPassword ? "text" : "password"}
            endAdornment={
              isIconActive && (
                <InputAdornment
                  position="end"
                  sx={{ pr: 1 }}
                  onClick={() =>
                    setShowPassword && setShowPassword(!showPassword)
                  }
                >
                  <IconButton edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default CustomInput;
