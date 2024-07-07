import React, { useEffect, useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Box,
  Button,
  Menu,
} from "@mui/material";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { ISchoolDetails } from "../Models/ISchoolDetails";
import NotificationPopUp from "./Notification/NotificationPopUp";
interface SchoolListProps {
  schoolList: ISchoolDetails[];
}
const columns: GridColDef<ISchoolDetails>[] = [
  { field: "schoolName", headerName: "School Name", width: 250 },
  {
    field: "srn",
    headerName: "SRN",
    width: 90,
  },
  {
    field: "teacherFirstName",
    headerName: "Teacher First Name",
    width: 150,
  },
  {
    field: "teacherLastName",
    headerName: "Teacher Last Name",
    width: 150,
  },
  {
    field: "teacherEmail",
    headerName: "Teacher Email",
    width: 150,
  },
  {
    field: "totalStudents",
    headerName: "Total Students",
    width: 150,
  },
  {
    field: "totalPayment",
    headerName: "Total Payment",
    width: 250,
  },
  {
    field: "totalPaymentReceived",
    headerName: "Total Payment Received",
    width: 250,
  },
  {
    field: "paymentStatus",
    headerName: "Payment Status",
    width: 250,
  },
  {
    field: "academicYear",
    headerName: "Academic Year",
    width: 150,
  },
  {
    field: "district",
    headerName: "District",
    width: 150,
  },
  {
    field: "className",
    headerName: "Class Name",
    width: 150,
  },
];
const SchoolList: React.FC<SchoolListProps> = ({ schoolList }) => {
  const [filteredData, setFilteredData] = useState(schoolList || []);
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("All");
  const [academicYear, setAcademicYear] = useState("All");
  const [paymentStatus, setPaymentStatus] = useState("All");
  const [classname, setClassname] = useState("All");
  const [selectedSchools, setSelectedSchools] = useState<ISchoolDetails[]>([]);
  const [notiOpen, setNotiOpen] = useState(false);
  const [notiType, setNotiType] = useState<string>("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onNotiClose = () => {
    setNotiOpen(false);
  };
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
          item.teacherFirstName.toLowerCase().includes(search.toLowerCase()) ||
          item.teacherLastName.toLowerCase().includes(search.toLowerCase())
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
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "10px",
          justifyContent: "space-between",
        }}
      >
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
        <div style={{ alignSelf: "center" }}>
          <Button
            id="basic-button"
            size="large"
            variant="outlined"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Actions
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                setNotiType("EmailService");
                setNotiOpen(true);
                handleClose();
              }}
            >
              Send Email
            </MenuItem>

            <MenuItem
              onClick={() => {
                setNotiType("WhatsappService");
                setNotiOpen(true);
                handleClose();
              }}
            >
              Send Whatsapp
            </MenuItem>
          </Menu>
        </div>
      </div>

      <Box sx={{ height: "75vh", width: "98vw" }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          onRowSelectionModelChange={(newSelection) => {
            setSelectedSchools(
              newSelection
                .map((idx: GridRowId) =>
                  filteredData.find((_) => _.id === Number(idx))
                )
                .filter(
                  (school): school is ISchoolDetails => school !== undefined
                )
            );
          }}
          pageSizeOptions={[15]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <NotificationPopUp
        open={notiOpen}
        onClose={onNotiClose}
        selectedSchools={selectedSchools}
        type={notiType}
      />
    </div>
  );
};

export default SchoolList;
