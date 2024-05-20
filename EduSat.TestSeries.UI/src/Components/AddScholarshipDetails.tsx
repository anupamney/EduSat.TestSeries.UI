import { useState } from "react";
import { IScholarshipDetails } from "../Models/IScholarshipDetails";
import {
  addScholarshipDetails,
  getClasses,
  getSchools,
  getTeachers,
} from "../service/dataService";
import { ITeacher } from "../Models/ITeacher";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Button, FormControl, InputLabel, TextField } from "@mui/material";
import { ISchool } from "../Models/ISchool";
import { IClass } from "../Models/IClass";
const AddScholarshipDetails = () => {
  const [scholarshipDetails, setScholarshipDetails] =
    useState<IScholarshipDetails>({
      Id: "0",
      SchoolId: "",
      classId: "",
      TeacherId: "",
      AcademicYear: "",
      StaffId: "will",
      NumberOfStudents: 0,
    });
  const [teachers, setTeachers] = useState([] as ITeacher[]);
  const [schools, setSchools] = useState([] as ISchool[]);
  const [classes, setClasses] = useState([] as IClass[]);

  const fetchClasses = async () => {
    const response = await getClasses();
    if (response) {
      const classes: IClass[] = response.data;
      setClasses(classes);
    }
  };

  const fetchSchools = async () => {
    const response = await getSchools();
    if (response) {
      const schools: ISchool[] = response.data;
      setSchools(schools);
    }
  };

  const fetchteachers = async () => {
    const response = await getTeachers();
    if (response) {
      const teachers: ITeacher[] = response.data;
      setTeachers(teachers);
    }
  };

  const handleChange = (e: SelectChangeEvent) => {
    setScholarshipDetails({
      ...scholarshipDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(scholarshipDetails);
    console.log(schools);
    addScholarshipDetails(scholarshipDetails);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Add Scholarship Details</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Button onClick={fetchteachers} disabled={teachers.length > 0}>
          Get the list of registered teachers
        </Button>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="teacher">Teachers</InputLabel>
          <Select
            name="TeacherId"
            onChange={handleChange}
            value={scholarshipDetails.TeacherId}
          >
            {teachers.map((teacher) => (
              <MenuItem key={teacher.id} value={teacher.id}>
                {teacher.firstName} {teacher.lastName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button onClick={fetchSchools} disabled={schools.length > 0}>
          Get the list of registered Schools
        </Button>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="Schools">Schools</InputLabel>
          <Select
            name="SchoolId"
            onChange={handleChange}
            value={scholarshipDetails.SchoolId}
          >
            {schools.map((school) => (
              <MenuItem key={school.id} value={school.id}>
                {school.name} {school.city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button onClick={fetchClasses} disabled={classes.length > 0}>
          Get the list of registered Classes
        </Button>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="Classes">Classes</InputLabel>
          <Select
            name="classId"
            onChange={handleChange}
            value={scholarshipDetails.classId}
          >
            {classes.map((teacher) => (
              <MenuItem key={teacher.id} value={teacher.id}>
                {teacher.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="Academic Year">Academic Year</InputLabel>
          <Select
            name="AcademicYear"
            onChange={handleChange}
            value={scholarshipDetails.AcademicYear}
          >
            <MenuItem key={1} value={"2021 - 22"}>
              2021-22
            </MenuItem>
            <MenuItem key={2} value={"2022 - 23"}>
              2022-23
            </MenuItem>
            <MenuItem key={3} value={"2023 - 24"}>
              2023-24
            </MenuItem>
            <MenuItem key={4} value={"2024 - 25"}>
              2024-25
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <TextField
            required
            id="outlined-disabled"
            label="Number of Students"
            defaultValue={scholarshipDetails.NumberOfStudents}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setScholarshipDetails({
                ...scholarshipDetails,
                NumberOfStudents: parseInt(e.target.value),
              })
            }
          />
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddScholarshipDetails;
