import React, { useEffect, useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Box,
  Button,
  Menu,
  Grid,
  Paper,
  FormControl,
  SelectChangeEvent,
  IconButton,
} from "@mui/material";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { ISchoolDetails } from "../Models/ISchoolDetails";
import EmailPopup from "./Notification/NotificationPopUp";
import axios from "axios";
import { baseURL } from "../utils/constants";
import MenuIcon from "@mui/icons-material/Menu";

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
    field: "teacherContact",
    headerName: "Teacher Mobile",
    width: 150,
  },
  {
    field: "teacherEmail",
    headerName: "Teacher Email",
    width: 250,
  },
  {
    field: "isPrincipal",
    headerName: "Principal",
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
    width: 150,
  },
  {
    field: "totalPaymentReceived",
    headerName: "Total Payment Received",
    width: 150,
  },
  {
    field: "paymentStatus",
    headerName: "Payment Status",
    width: 150,
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

const SchoolList: React.FC<SchoolListProps> = ({ schoolList }: SchoolListProps) => {
  const [filteredData, setFilteredData] = useState<ISchoolDetails[]>(schoolList || []);
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("All");
  const [academicYear, setAcademicYear] = useState("All");
  const [paymentStatus, setPaymentStatus] = useState("All");
  const [classname, setClassname] = useState("All");
  const [isPrincipal, setIsPrincipal] = useState("All");
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
  }, [search, district, academicYear, paymentStatus, classname, isPrincipal]);

  const uniqueDistricts = Array.from(
    new Set(schoolList.map((school: ISchoolDetails) => school.district))
  );
  
  const uniqueAcademicYears = Array.from(
    new Set(schoolList.map((school: ISchoolDetails) => school.academicYear))
  );
  
  const uniqueClassNames = Array.from(
    new Set(schoolList.map((school: ISchoolDetails) => school.className))
  );
  
  const handleFilter = () => {
    let updatedData = schoolList;

    if (search) {
      updatedData = updatedData.filter(
        (item: ISchoolDetails) =>
          item.schoolName.toLowerCase().includes(search.toLowerCase()) ||
          item.srn.toString().includes(search) ||
          item.teacherFirstName.toLowerCase().includes(search.toLowerCase()) ||
          item.teacherLastName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply district filter
    if (district !== "All") {
      updatedData = updatedData.filter((item: ISchoolDetails) => item.district === district);
    }
    // Apply academic year filter
    if (academicYear !== "All") {
      updatedData = updatedData.filter(
        (item: ISchoolDetails) => item.academicYear === academicYear
      );
    }
    // Apply payment status filter
    if (paymentStatus !== "All") {
      const status = paymentStatus === "Paid";
      updatedData = updatedData.filter((item: ISchoolDetails) => item.paymentStatus === status);
    }
    // Apply class filter
    if (classname !== "All") {
      updatedData = updatedData.filter((item: ISchoolDetails) => item.className === classname);
    }

    // Apply isPrincipal filter
    if (isPrincipal !== "All") {
      const status = isPrincipal === "true";
      updatedData = updatedData.filter((item: ISchoolDetails) => item.isPrincipal === status);
    }

    setFilteredData(updatedData);
  };

  const downloadExcel = async () => {
    try {
      const response = await axios.get(`${baseURL}export/excel`, {
        responseType: "blob", // Ensure the response is handled as a binary object
      });

      // Create a URL for the blob
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link and trigger download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `SchoolDetails-${Date.now()}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Failed to download Excel file", error);
    }
  };

  const selectProps = {
    MenuProps: {
      PaperProps: {
        sx: {
          bgcolor: 'rgba(30, 30, 48, 0.95)',
          borderRadius: 2,
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
          '& .MuiMenuItem-root': {
            color: '#ffffff',
            '&:hover': {
              bgcolor: 'rgba(45, 206, 101, 0.08)',
            },
            '&.Mui-selected': {
              bgcolor: 'rgba(45, 206, 101, 0.16)',
              '&:hover': {
                bgcolor: 'rgba(45, 206, 101, 0.24)',
              }
            }
          }
        }
      }
    }
  };

  return (
    <>
      <Box>
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 3 },
            mb: 3,
            borderRadius: 2,
            backgroundColor: 'rgba(18, 18, 24, 0.7)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={3}>
              <FormControl fullWidth size="small">
                <TextField
                  label="Search School Name, SRN, Teacher Name"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  fullWidth
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: { 
                      borderRadius: 1.5,
                      bgcolor: 'rgba(18, 18, 24, 0.7)',
                    }
                  }}
                  InputLabelProps={{ 
                    sx: { color: 'rgba(255, 255, 255, 0.7)' }
                  }}
                />
              </FormControl>
            </Grid>
            
            <Grid item xs={6} sm={4} md={1.5}>
              <FormControl fullWidth size="small">
                <InputLabel id="district-label" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  District
                </InputLabel>
                <Select
                  labelId="district-label"
                  value={district}
                  onChange={(e: SelectChangeEvent) => {
                    setDistrict(e.target.value);
                  }}
                  label="District"
                  sx={{ 
                    borderRadius: 1.5,
                    bgcolor: 'rgba(18, 18, 24, 0.7)',
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main',
                    },
                    '.MuiSvgIcon-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    }
                  }}
                  {...selectProps}
                >
                  <MenuItem value="All">All</MenuItem>
                  {uniqueDistricts.map((district, idx) => (
                    <MenuItem key={idx} value={district as string}>
                      {district as string}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={6} sm={4} md={1.5}>
              <FormControl fullWidth size="small">
                <InputLabel id="academicYear-label" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Academic Year
                </InputLabel>
                <Select
                  labelId="academicYear-label"
                  name="academicYear"
                  value={academicYear}
                  onChange={(e: SelectChangeEvent) => {
                    setAcademicYear(e.target.value);
                  }}
                  label="Academic Year"
                  sx={{ 
                    borderRadius: 1.5,
                    bgcolor: 'rgba(18, 18, 24, 0.7)',
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main',
                    },
                    '.MuiSvgIcon-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    }
                  }}
                  {...selectProps}
                >
                  <MenuItem value="All">All</MenuItem>
                  {uniqueAcademicYears.map((year, idx) => (
                    <MenuItem key={idx} value={year as string}>
                      {year as string}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={6} sm={4} md={1.5}>
              <FormControl fullWidth size="small">
                <InputLabel id="className-label" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Class Name
                </InputLabel>
                <Select
                  labelId="className-label"
                  name="classname"
                  value={classname}
                  onChange={(e: SelectChangeEvent) => {
                    setClassname(e.target.value);
                  }}
                  label="Class Name"
                  sx={{ 
                    borderRadius: 1.5,
                    bgcolor: 'rgba(18, 18, 24, 0.7)',
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main',
                    },
                    '.MuiSvgIcon-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    }
                  }}
                  {...selectProps}
                >
                  <MenuItem value="All">All</MenuItem>
                  {uniqueClassNames.map((className, idx) => (
                    <MenuItem key={idx} value={className as string}>
                      {className as string}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={6} sm={4} md={1.5}>
              <FormControl fullWidth size="small">
                <InputLabel id="paymentStatus-label" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Payment
                </InputLabel>
                <Select
                  labelId="paymentStatus-label"
                  value={paymentStatus}
                  onChange={(e: SelectChangeEvent) => {
                    setPaymentStatus(e.target.value as string);
                  }}
                  label="Payment"
                  sx={{ 
                    borderRadius: 1.5,
                    bgcolor: 'rgba(18, 18, 24, 0.7)',
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main',
                    },
                    '.MuiSvgIcon-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    }
                  }}
                  {...selectProps}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Paid">Paid</MenuItem>
                  <MenuItem value="Unpaid">Unpaid</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={6} sm={4} md={1.5}>
              <FormControl fullWidth size="small">
                <InputLabel id="isPrincipal-label" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Principal
                </InputLabel>
                <Select
                  labelId="isPrincipal-label"
                  value={isPrincipal}
                  onChange={(e: SelectChangeEvent) => {
                    setIsPrincipal(e.target.value as string);
                  }}
                  label="Principal"
                  sx={{ 
                    borderRadius: 1.5,
                    bgcolor: 'rgba(18, 18, 24, 0.7)',
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main',
                    },
                    '.MuiSvgIcon-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    }
                  }}
                  {...selectProps}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="true">Yes</MenuItem>
                  <MenuItem value="false">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={6} sm={4} md={1.5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                id="menu-button"
                aria-controls={open ? "actions-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ 
                  color: '#2096ed',
                  backgroundColor: 'rgba(32, 150, 237, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(32, 150, 237, 0.2)',
                  },
                  padding: '8px',
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="actions-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "menu-button",
                }}
                PaperProps={{
                  sx: {
                    backgroundColor: 'rgba(18, 18, 24, 0.95)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    borderRadius: '8px',
                  }
                }}
              >
                <MenuItem
                  onClick={() => {
                    setNotiType("EmailService");
                    setNotiOpen(true);
                    handleClose();
                  }}
                  sx={{ color: 'white', py: 1.5 }}
                >
                  Send Email
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    setNotiType("SMSService");
                    setNotiOpen(true);
                    handleClose();
                  }}
                  sx={{ color: 'white', py: 1.5 }}
                >
                  Send SMS
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    downloadExcel();
                    handleClose();
                  }}
                  sx={{ color: 'white', py: 1.5 }}
                >
                  Export to Excel
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Paper>

        <DataGrid
          rows={filteredData}
          columns={columns}
          checkboxSelection
          onRowSelectionModelChange={(newSelection) => {
            setSelectedSchools(
              filteredData.filter((row: ISchoolDetails) =>
                (newSelection as GridRowId[]).includes(row.id)
              )
            );
          }}
          autoHeight
          sx={{
            backgroundColor: 'rgba(18, 18, 24, 0.7)',
            borderRadius: 2,
            p: 1,
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            '& .MuiDataGrid-row:hover': {
              backgroundColor: 'rgba(45, 206, 101, 0.08)',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: 'rgba(45, 206, 101, 0.2)',
              color: 'white',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            },
            '& .MuiCheckbox-root': {
              color: 'rgba(255, 255, 255, 0.7)',
            },
            '& .MuiTablePagination-root': {
              color: 'white',
            },
            '& .MuiSvgIcon-root': {
              color: 'rgba(255, 255, 255, 0.7)',
            },
          }}
        />
      </Box>
      <EmailPopup
        open={notiOpen}
        onClose={onNotiClose}
        selectedSchools={selectedSchools}
        type={notiType}
      />
    </>
  );
};

export default SchoolList;
