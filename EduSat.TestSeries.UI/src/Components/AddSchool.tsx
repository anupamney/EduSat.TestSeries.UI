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
} from "@mui/material";
import { useSnackbar } from "notistack";
import { districts, Taluka } from "../assets/Districts/Districts";

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
  }, [selectedDistrict, districts]);

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

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add School</h2>
      <FormControl fullWidth margin="normal">
        <TextField
          label="School Name"
          id="name"
          name="name"
          value={school.name}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Address line 1"
          id="addressLine1"
          name="addressLine1"
          value={school.addressLine1}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Address line 2"
          id="addressLine2"
          name="addressLine2"
          value={school.addressLine2}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="City"
          id="City"
          name="city"
          value={school.city}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel id="district-select-label">District</InputLabel>
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
        >
          {districtNames.map((districtName) => (
            <MenuItem key={districtName.name} value={districtName.name}>
              {districtName.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal" disabled={!selectedDistrict}>
        <InputLabel id="taluka-select-label">Taluka</InputLabel>
        <Select
          labelId="taluka-select-label"
          id="taluka-select"
          name="taluka"
          value={school.taluka}
          onChange={handleChangeSelect}
          label="Taluka"
        >
          {talukas.map((taluka) => (
            <MenuItem key={taluka.name} value={taluka.name}>
              {taluka.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="State"
          id="state"
          name="state"
          value={school.state}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Pin Code"
          id="pincode"
          name="pin"
          value={school.pin}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Email"
          id="email"
          name="email"
          value={school.email}
          onChange={handleChange}
          type="email"
        />
      </FormControl>

      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};

export default AddSchool;
