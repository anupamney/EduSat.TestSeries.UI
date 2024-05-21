import React, { useState } from "react";
import { addSchool } from "../service/dataService";
import { ISchool } from "../Models/ISchool";
import { useNavigate } from "react-router-dom";
import { FormControl, TextField, Button } from "@mui/material";
import { useSnackbar } from "notistack";

const AddSchool: React.FC = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [school, setSchool] = useState<ISchool>({
    id: "0",
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    district: "",
    state: "",
    pin: "",
    email: "",
    staffId: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSchool({ ...school, [event.target.name]: event.target.value });
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
        <TextField
          label="District"
          id="district"
          name="district"
          value={school.district}
          onChange={handleChange}
        />
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
