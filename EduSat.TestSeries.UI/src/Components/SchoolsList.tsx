import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  InputLabel,
} from "@mui/material";
import { ISchoolDetails } from "../Models/ISchoolDetails";
interface SchoolListProps {
  schoolList: ISchoolDetails[];
}
const SchoolList: React.FC<SchoolListProps> = ({ schoolList }) => {
  const [filteredData, setFilteredData] = useState(schoolList || []);
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("All");
  const [academicYear, setAcademicYear] = useState("All");
  const [paymentStatus, setPaymentStatus] = useState("All");
  const [classname, setClassname] = useState("All");

  useEffect(() => {
    handleFilter();
  }, [search, district, academicYear, paymentStatus, classname]);

  const uniqueDistricts = Array.from(
    new Set(schoolList.map((school) => school.district))
  );
  const uniqueAcademicYears = Array.from(
    new Set(schoolList.map((school) => school.academicYear))
  );
  const uniqueClassNames = Array.from(
    new Set(schoolList.map((school) => school.className))
  );
  const handleFilter = () => {
    let updatedData = schoolList;

    if (search) {
      updatedData = updatedData.filter(
        (item) =>
          item.schoolName.toLowerCase().includes(search.toLowerCase()) ||
          item.srn.toString().includes(search) ||
          item.teacherName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply district filter
    if (district !== "All") {
      updatedData = updatedData.filter((item) => item.district === district);
    }
    // Apply academic year filter
    if (academicYear !== "All") {
      updatedData = updatedData.filter(
        (item) => item.academicYear === academicYear
      );
    }
    // Apply payment status filter
    if (paymentStatus !== "All") {
      const status = paymentStatus === "Paid";
      updatedData = updatedData.filter((item) => item.paymentStatus === status);
    }
    // Apply class filter
    if (classname !== "All") {
      updatedData = updatedData.filter((item) => item.className === classname);
    }

    setFilteredData(updatedData);
  };

  return (
    <div style={{ margin: "16px" }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <div style={{ width: "350px" }}>
          <InputLabel id="search">Search</InputLabel>
          <TextField
            label="Search School Name, SRN, Teacher Name"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            fullWidth
          />
        </div>
        <div>
          <InputLabel id="district">District</InputLabel>
          <Select
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
            }}
            style={{ width: "200px" }}
          >
            <MenuItem value="All">All</MenuItem>
            {uniqueDistricts.map((school, idx) => {
              return (
                <MenuItem key={idx} value={school}>
                  {school}
                </MenuItem>
              );
            })}
          </Select>
        </div>
        <div>
          <InputLabel id="academicYear">Academic Year</InputLabel>
          <Select
            name="academicYear"
            value={academicYear}
            onChange={(e) => {
              setAcademicYear(e.target.value);
            }}
            style={{ width: "150px" }}
          >
            <MenuItem value="All">All</MenuItem>
            {uniqueAcademicYears.map((school, idx) => (
              <MenuItem key={idx} value={school}>
                {school}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <InputLabel id="className">Class Name</InputLabel>
          <Select
            name="classname"
            value={classname}
            onChange={(e) => {
              setClassname(e.target.value);
            }}
            style={{ width: "150px" }}
          >
            <MenuItem value="All">All</MenuItem>
            {uniqueClassNames.map((school, idx) => (
              <MenuItem key={idx} value={school}>
                {school}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <InputLabel id="paymentStatus">Payment Status</InputLabel>
          <Select
            value={paymentStatus}
            onChange={(e) => {
              setPaymentStatus(e.target.value as string);
            }}
            style={{ width: "120px" }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Paid">Paid</MenuItem>
            <MenuItem value="Unpaid">Unpaid</MenuItem>
          </Select>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>School Name</TableCell>
              <TableCell>SRN</TableCell>
              <TableCell>Contact Person</TableCell>
              <TableCell>Contact Details</TableCell>
              <TableCell>Students</TableCell>
              <TableCell>Total Payment</TableCell>
              <TableCell>Payment Received</TableCell>
              <TableCell>Payment Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.schoolName}</TableCell>
                <TableCell>{row.srn}</TableCell>
                <TableCell>{row.teacherName}</TableCell>
                <TableCell>{row.teacherEmail}</TableCell>
                <TableCell>{row.totalStudents}</TableCell>
                <TableCell>{row.totalPayment}</TableCell>
                <TableCell>{row.totalPaymentReceived}</TableCell>
                <TableCell>
                  <Checkbox checked={row.paymentStatus} disabled />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SchoolList;
