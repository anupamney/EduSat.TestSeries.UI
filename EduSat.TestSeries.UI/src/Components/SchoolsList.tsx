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
  Button,
  Checkbox,
} from "@mui/material";
import { ISchoolDetails } from "../Models/ISchoolDetails";
import { getSchoolList } from "../service/dataService";
let schoolsListData: ISchoolDetails[] = [];
const SchoolList: React.FC = () => {
  const [filteredData, setFilteredData] = useState([] as ISchoolDetails[]);
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("All");
  const [academicYear, setAcademicYear] = useState("All");
  const [paymentStatus, setPaymentStatus] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSchoolList();
      setFilteredData(data?.data || []);
    };

    fetchData();
  }, []);
  const handleFilter = () => {
    if (!schoolsListData.length) schoolsListData = filteredData;
    let updatedData = schoolsListData;

    if (search) {
      updatedData = updatedData.filter(
        (item) =>
          item.schoolName.toLowerCase().includes(search.toLowerCase()) ||
          item.srn.toString().includes(search) ||
          item.teacherName.toLowerCase().includes(search)
      );
    }

    // Apply district filter
    // Apply academic year filter
    if (paymentStatus !== "All") {
      const status = paymentStatus === "Paid";
      updatedData = updatedData.filter((item) => item.paymentStatus === status);
    }

    setFilteredData(updatedData);
  };

  return (
    <div style={{ margin: "16px" }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <TextField
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          label="District"
          value={district}
          onChange={(e) => setDistrict(e.target.value as string)}
        >
          <MenuItem value="All">All</MenuItem>
          {/* Add other district options here */}
        </Select>
        <Select
          label="Academic Year"
          value={academicYear}
          onChange={(e) => setAcademicYear(e.target.value as string)}
        >
          <MenuItem value="All">All</MenuItem>
          {/* Add other academic year options here */}
        </Select>
        <Select
          value={paymentStatus}
          onChange={(e) => setPaymentStatus(e.target.value as string)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Paid">Paid</MenuItem>
          <MenuItem value="Unpaid">Unpaid</MenuItem>
        </Select>
        <Button variant="contained" onClick={handleFilter}>
          Apply Filters
        </Button>
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
