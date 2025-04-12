import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const colors = {
  green: {
    100: "#d5f5e0",
    200: "#abebc1",
    300: "#81e2a3",
    400: "#57d884",
    500: "#2dce65",
    600: "#24a551",
    700: "#1b7c3d",
    800: "#125228",
    900: "#092914",
  },
  lightBlue: {
    100: "#d2eafb",
    200: "#a6d5f8",
    300: "#79c0f4",
    400: "#4dabf1",
    500: "#2096ed",
    600: "#1a78be",
    700: "#135a8e",
    800: "#0d3c5f",
    900: "#061e2f",
  },
  input: {
    100: "#d3d6da",
    200: "#a7aeb5",
    300: "#7b8591",
    400: "#4f5d6c",
    500: "#233447",
    600: "#1c2a39",
    700: "#151f2b",
    800: "#0e151c",
    900: "#070a0e",
  },
  background: {
    100: "#f8f9fa",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#1a1a2e",
    600: "#16213e",
    700: "#13111a",
    800: "#0c0c12",
    900: "#060609",
  },
  text: {
    primary: "#f8f9fa",
    secondary: "#e9ecef",
    disabled: "#adb5bd",
  },
  border: "#343a40",
  table: {
    header: "rgba(45, 206, 101, 0.2)",
    row: "rgba(30, 30, 48, 0.7)",
    rowAlt: "rgba(255, 255, 255, 0.05)",
    hover: "rgba(45, 206, 101, 0.08)",
    selected: "rgba(45, 206, 101, 0.16)",
    border: "rgba(255, 255, 255, 0.15)",
  }
};

const baseTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.green[500],
      light: colors.green[300],
      dark: colors.green[700],
    },
    secondary: {
      main: colors.lightBlue[500],
      light: colors.lightBlue[300],
      dark: colors.lightBlue[700],
    },
    background: {
      default: "#121212",
      paper: "#1e1e30",
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.25rem",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#121212",
          color: "#ffffff",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1e30",
          borderRadius: 8,
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
          fontWeight: 500,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          },
        },
        contained: {
          "&:hover": {
            boxShadow: "0 6px 16px rgba(45, 206, 101, 0.25)",
          },
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.green[400],
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.green[500],
            },
          },
          "& .MuiOutlinedInput-input": {
            color: colors.text.primary,
          },
          "& .MuiInputLabel-root": {
            color: colors.text.secondary,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: colors.text.primary,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colors.text.secondary,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: colors.text.primary,
        },
        icon: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.23)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.5)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.green[500],
          },
        },
        input: {
          color: colors.text.primary,
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(30, 30, 48, 0.7)",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(45, 206, 101, 0.2)",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(even)": {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          },
          "&:hover": {
            backgroundColor: "rgba(45, 206, 101, 0.08)",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
          color: colors.text.primary,
        },
        head: {
          fontWeight: 600,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: colors.text.primary,
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
