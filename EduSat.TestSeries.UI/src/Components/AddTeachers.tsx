import { FormControl, FormLabel, TextField, Button } from "@mui/material";
import { ITeacher } from "../Models/ITeacher";
import { addTeacher } from "../service/dataService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
// import { AxiosResponse } from "axios";

const AddTeachers: React.FC = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [teacher, setTeacher] = useState<ITeacher>({
    id: "0",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });

  // const [teachers, setTeachers] = useState([] as ITeacher[]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeacher({ ...teacher, [event.target.name]: event.target.value });
  };

  // const handleSelectChange = (event: SelectChangeEvent) => {
  //   setTeacher({ ...teacher, [event.target.name]: event.target.value });
  // };

  // const fetchteachers = async () => {
  //   const response = await getTeachers();
  //   if (response) {
  //     const teachers: ITeacher[] = response.data;
  //     setTeachers(teachers);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(teacher);
    const success = await addTeacher(teacher);
    if (success) {
      enqueueSnackbar("Teacher added successfully", { variant: "success" });
      navigate("/add-scholarship");
    } else {
      enqueueSnackbar("Failed to add teacher", { variant: "error" });
    }
  };
  return (
    <div>
      {/* <Button onClick={fetchteachers} disabled={teachers.length > 0}>
        Get the list of registered teachers
      </Button>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="teacher">Teachers</InputLabel>
        <Select name="id" onChange={handleSelectChange} value={teacher.id}>
          {teachers.map((teacher) => (
            <MenuItem key={teacher.id} value={teacher.id}>
              {teacher.firstName} {teacher.lastName}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}

      <form onSubmit={handleSubmit}>
        <h2>Add Teacher</h2>
        <FormControl fullWidth margin="normal">
          <FormLabel>First Name</FormLabel>
          <TextField
            label="First Name"
            id="firstName"
            name="firstName"
            value={teacher.firstName}
            onChange={handleChange}
            required
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <FormLabel>Last Name</FormLabel>
          <TextField
            label="Last Name"
            id="lastName"
            name="lastName"
            value={teacher.lastName}
            onChange={handleChange}
            required
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <FormLabel>Mobile Number</FormLabel>
          <TextField
            label="Mobile Number"
            id="mobile"
            name="mobile"
            value={teacher.mobile}
            onChange={handleChange}
            type="number" // Set input type for phone numbers
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <FormLabel>Email</FormLabel>
          <TextField
            label="Email"
            id="email"
            name="email"
            value={teacher.email}
            onChange={handleChange}
            type="email"
            required
          />
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Add Teacher
        </Button>
        <Button onClick={() => navigate("/add-scholarship")}>
          Skip Adding Teacher
        </Button>
      </form>
    </div>
  );
};

export default AddTeachers;
