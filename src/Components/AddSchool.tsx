import React, { useEffect, useState } from "react";
import { addSchool } from "../service/dataService";
import { ISchool } from "../Models/ISchool";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Grid,
  Box,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { districts, Taluka } from "../assets/Districts/Districts";
import SchoolIcon from '@mui/icons-material/School';
import PageLayout from "../layouts/PageLayout";

const AddSchool: React.FC = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [school, setSchool] = useState<ISchool>({
    id: "0",
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    taluka: "",
    district: "",
    state: "Maharashtra",
    pin: "",
    email: "",
    staffId: "",
  });

  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [talukas, setTalukas] = useState<Taluka[]>([]);

  const districtNames = districts.sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    const district = districts.find((d) => d.name === selectedDistrict);
    if (district) {
      setTalukas(district.talukas);
    } else {
      setTalukas([]);
    }
  }, [selectedDistrict]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSchool({ ...school, [event.target.name]: event.target.value });
  };

  const handleChangeSelect = (e: SelectChangeEvent) => {
    setSchool({ ...school, [e.target.name]: e.target.value as string });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const success = await addSchool(school);
    if (success) {
      enqueueSnackbar("School added successfully", { variant: "success" });
      navigate("/add-teachers");
    } else {
      enqueueSnackbar("Failed to add school", { variant: "error" });
    }
  };

  const inputProps = {
    sx: { 
      borderRadius: 1.5,
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'primary.main',
      },
      color: 'white',
    }
  };

  return (
    <PageLayout
      title="Add School"
      icon={<SchoolIcon sx={{ fontSize: 32, color: 'primary.main' }} />}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                label="School Name"
                id="name"
                name="name"
                value={school.name}
                onChange={handleChange}
                variant="outlined"
                required
                InputProps={inputProps}
                InputLabelProps={{ 
                  sx: { color: 'rgba(255, 255, 255, 0.7)' }
                }}
              />
            </FormControl>
          </Grid>
          
          <Grid item xs={12}>
            <Box sx={{ color: 'primary.main', fontWeight: 500, mb: 1, fontSize: '0.9rem' }}>
              Address Information
            </Box>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Address line 1"
                id="addressLine1"
                name="addressLine1"
                value={school.addressLine1}
                onChange={handleChange}
                variant="outlined"
                required
                InputProps={inputProps}
                InputLabelProps={{ 
                  sx: { color: 'rgba(255, 255, 255, 0.7)' }
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Address line 2"
                id="addressLine2"
                name="addressLine2"
                value={school.addressLine2}
                onChange={handleChange}
                variant="outlined"
                InputProps={inputProps}
                InputLabelProps={{ 
                  sx: { color: 'rgba(255, 255, 255, 0.7)' }
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="City"
                id="City"
                name="city"
                value={school.city}
                onChange={handleChange}
                variant="outlined"
                required
                InputProps={inputProps}
                InputLabelProps={{ 
                  sx: { color: 'rgba(255, 255, 255, 0.7)' }
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="district-select-label" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                District
              </InputLabel>
              <Select
                labelId="district-select-label"
                id="district-select"
                name="district"
                value={school.district}
                onChange={(event) => {
                  handleChangeSelect(event);
                  setSelectedDistrict(event.target.value as string);
                }}
                label="District"
                required
                sx={{ 
                  borderRadius: 1.5,
                  '.MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  },
                  color: 'white'
                }}
              >
                {districtNames.map((districtName) => (
                  <MenuItem key={districtName.name} value={districtName.name}>
                    {districtName.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth disabled={!selectedDistrict}>
              <InputLabel id="taluka-select-label" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Taluka
              </InputLabel>
              <Select
                labelId="taluka-select-label"
                id="taluka-select"
                name="taluka"
                value={school.taluka}
                onChange={handleChangeSelect}
                label="Taluka"
                required
                sx={{ 
                  borderRadius: 1.5,
                  '.MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  },
                  color: 'white'
                }}
              >
                {talukas.map((taluka) => (
                  <MenuItem key={taluka.name} value={taluka.name}>
                    {taluka.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="State"
                id="state"
                name="state"
                value={school.state}
                onChange={handleChange}
                variant="outlined"
                required
                InputProps={inputProps}
                InputLabelProps={{ 
                  sx: { color: 'rgba(255, 255, 255, 0.7)' }
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="Pin Code"
                id="pincode"
                name="pin"
                value={school.pin}
                onChange={handleChange}
                variant="outlined"
                required
                InputProps={inputProps}
                InputLabelProps={{ 
                  sx: { color: 'rgba(255, 255, 255, 0.7)' }
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
                value={school.email}
                onChange={handleChange}
                type="email"
                variant="outlined"
                required
                InputProps={inputProps}
                InputLabelProps={{ 
                  sx: { color: 'rgba(255, 255, 255, 0.7)' }
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Box display="flex" justifyContent="space-between">
              <Button 
                variant="outlined" 
                color="inherit"
                onClick={() => navigate(-1)}
                sx={{ borderRadius: 1.5, px: 3, color: 'white', borderColor: 'rgba(255, 255, 255, 0.5)' }}
              >
                Cancel
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
                Add School
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </PageLayout>
  );
};

export default AddSchool;
