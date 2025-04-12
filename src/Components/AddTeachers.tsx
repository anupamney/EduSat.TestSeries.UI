import {
  FormControl,
  TextField,
  Button,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Grid,
  Box,
} from "@mui/material";
import { ITeacher } from "../Models/ITeacher";
import { addTeacher } from "../service/dataService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import PageLayout from "../layouts/PageLayout";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const AddTeachers: React.FC = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [teacher, setTeacher] = useState<ITeacher>({
    id: "0",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    isPrincipal: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeacher({ ...teacher, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await addTeacher(teacher);
    if (success) {
      enqueueSnackbar("Teacher added successfully", { variant: "success" });
      navigate("/add-scholarship");
    } else {
      enqueueSnackbar("Failed to add teacher", { variant: "error" });
    }
  };
  
  return (
    <PageLayout 
      title="Add Teacher" 
      icon={<PersonAddIcon sx={{ fontSize: 32, color: 'primary.main' }} />}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="First Name"
                id="firstName"
                name="firstName"
                value={teacher.firstName}
                onChange={handleChange}
                required
                variant="outlined"
                InputProps={{
                  sx: { borderRadius: 1.5 }
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="Last Name"
                id="lastName"
                name="lastName"
                value={teacher.lastName}
                onChange={handleChange}
                required
                variant="outlined"
                InputProps={{
                  sx: { borderRadius: 1.5 }
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="Mobile Number"
                id="mobile"
                name="mobile"
                value={teacher.mobile}
                onChange={handleChange}
                type="tel"
                variant="outlined"
                InputProps={{
                  sx: { borderRadius: 1.5 }
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="Email"
                id="email"
                name="email"
                value={teacher.email}
                onChange={handleChange}
                type="email"
                required
                variant="outlined"
                InputProps={{
                  sx: { borderRadius: 1.5 }
                }}
              />
            </FormControl>
          </Grid>
          
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={teacher.isPrincipal === 1}
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      setTeacher({ ...teacher, isPrincipal: target.checked ? 1 : 0 });
                    }}
                    sx={{ 
                      color: 'primary.light',
                      '&.Mui-checked': {
                        color: 'primary.main',
                      }
                    }}
                  />
                }
                label="Is Principal"
              />
            </FormGroup>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Box display="flex" justifyContent="space-between">
              <Button 
                variant="outlined" 
                color="inherit"
                onClick={() => navigate("/add-scholarship")}
                sx={{ borderRadius: 1.5 }}
              >
                Skip Adding Teacher
              </Button>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                sx={{ 
                  borderRadius: 1.5, 
                  px: 4,
                  boxShadow: '0 4px 14px rgba(45, 206, 101, 0.25)'
                }}
              >
                Add Teacher
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </PageLayout>
  );
};

export default AddTeachers;
