import { useState, useEffect } from "react";
import { IScholarshipDetails } from "../Models/IScholarshipDetails";
import {
  addPaymentDetails,
  addScholarshipDetails,
  getClasses,
  getSchools,
  getTeachers,
} from "../service/dataService";
import { ITeacher } from "../Models/ITeacher";
import {
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  TextField,
  Grid,
  Typography,
  Box,
  Divider,
  CircularProgress,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { ISchool } from "../Models/ISchool";
import { IClass } from "../Models/IClass";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { IPaymentDetails } from "../Models/IPaymentDetails";
import PageLayout from "../layouts/PageLayout";
import SchoolIcon from '@mui/icons-material/School';
import PaymentIcon from '@mui/icons-material/Payment';

const AddScholarshipDetails = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [paymentDet, setPaymentDetails] = useState<IPaymentDetails>({
    id: 0,
    scholarshipId: 0,
    totalAmount: 0,
    amountPaid: 0,
    paymentStatus: false,
    discountedPrice: 0,
    discountPercent: 0,
  });
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
  const [sdAdded, setSdAdded] = useState(false);
  const [loading, setLoading] = useState({
    teachers: false,
    schools: false,
    classes: false,
    submit: false,
  });

  // Load data on component mount
  useEffect(() => {
    fetchteachers();
    fetchSchools();
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    setLoading(prev => ({ ...prev, classes: true }));
    const response = await getClasses();
    if (response) {
      const classes: IClass[] = response.data;
      setClasses(classes);
    }
    setLoading(prev => ({ ...prev, classes: false }));
  };

  const fetchSchools = async () => {
    setLoading(prev => ({ ...prev, schools: true }));
    const response = await getSchools();
    if (response) {
      const schools: ISchool[] = response.data;
      setSchools(schools);
    }
    setLoading(prev => ({ ...prev, schools: false }));
  };

  const fetchteachers = async () => {
    setLoading(prev => ({ ...prev, teachers: true }));
    const response = await getTeachers();
    if (response) {
      const teachers: ITeacher[] = response.data;
      setTeachers(teachers);
    }
    setLoading(prev => ({ ...prev, teachers: false }));
  };

  const handleChange = (e: SelectChangeEvent) => {
    setScholarshipDetails({
      ...scholarshipDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name === "paymentStatus" 
      ? e.target.value === "true"
      : Number(e.target.value);
    
    setPaymentDetails({
      ...paymentDet,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(prev => ({ ...prev, submit: true }));
    const response = await addScholarshipDetails(scholarshipDetails);
    if (response && response.data) {
      const success: string = response.data;
      enqueueSnackbar("Scholarship details added successfully", {
        variant: "success",
      });
      setPaymentDetails({
        ...paymentDet,
        scholarshipId: parseInt(success),
      });
      setSdAdded(true);
    } else {
      enqueueSnackbar("Failed to add scholarship details", {
        variant: "error",
      });
    }
    setLoading(prev => ({ ...prev, submit: false }));
  };

  const handleSubmitAfter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(prev => ({ ...prev, submit: true }));
    const success = addPaymentDetails(paymentDet);
    if (await success) {
      enqueueSnackbar("Payment details added successfully", {
        variant: "success",
      });
      navigate("/schools");
    } else {
      enqueueSnackbar("Failed to add payment details", {
        variant: "error",
      });
    }
    setLoading(prev => ({ ...prev, submit: false }));
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

  const selectSx = {
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
      title={sdAdded ? "Add Payment Details" : "Add Scholarship Details"}
      icon={sdAdded ? <PaymentIcon sx={{ fontSize: 32, color: 'primary.main' }} /> : <SchoolIcon sx={{ fontSize: 32, color: 'primary.main' }} />}
    >
      <form onSubmit={sdAdded ? handleSubmitAfter : handleSubmit}>
        {!sdAdded ? (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="teacher-label" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Teacher
                </InputLabel>
                <Select
                  labelId="teacher-label"
                  name="TeacherId"
                  value={scholarshipDetails.TeacherId}
                  onChange={handleChange}
                  label="Teacher"
                  sx={selectSx}
                  {...selectProps}
                >
                  {loading.teachers ? (
                    <MenuItem disabled>
                      <CircularProgress size={20} sx={{ mr: 1 }} /> Loading...
                    </MenuItem>
                  ) : teachers.length > 0 ? (
                    teachers.map((teacher) => (
                      <MenuItem key={teacher.id} value={teacher.id}>
                        {teacher.firstName} {teacher.lastName}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>No teachers available</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="schools-label" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  School
                </InputLabel>
                <Select
                  labelId="schools-label"
                  name="SchoolId"
                  value={scholarshipDetails.SchoolId}
                  onChange={handleChange}
                  label="School"
                  sx={selectSx}
                  {...selectProps}
                >
                  {loading.schools ? (
                    <MenuItem disabled>
                      <CircularProgress size={20} sx={{ mr: 1 }} /> Loading...
                    </MenuItem>
                  ) : schools.length > 0 ? (
                    schools.map((school) => (
                      <MenuItem key={school.id} value={school.id}>
                        {school.name} {school.city}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>No schools available</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="classes-label" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Class
                </InputLabel>
                <Select
                  labelId="classes-label"
                  name="classId"
                  value={scholarshipDetails.classId}
                  onChange={handleChange}
                  label="Class"
                  sx={selectSx}
                  {...selectProps}
                >
                  {loading.classes ? (
                    <MenuItem disabled>
                      <CircularProgress size={20} sx={{ mr: 1 }} /> Loading...
                    </MenuItem>
                  ) : classes.length > 0 ? (
                    classes.map((cls) => (
                      <MenuItem key={cls.id} value={cls.id}>
                        {cls.name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>No classes available</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="academic-year-label" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Academic Year
                </InputLabel>
                <Select
                  labelId="academic-year-label"
                  name="AcademicYear"
                  value={scholarshipDetails.AcademicYear}
                  onChange={handleChange}
                  label="Academic Year"
                  sx={selectSx}
                  {...selectProps}
                >
                  <MenuItem value={"2021 - 22"}>2021-22</MenuItem>
                  <MenuItem value={"2022 - 23"}>2022-23</MenuItem>
                  <MenuItem value={"2023 - 24"}>2023-24</MenuItem>
                  <MenuItem value={"2024 - 25"}>2024-25</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField
                  required
                  label="Number of Students"
                  name="NumberOfStudents"
                  type="number"
                  value={scholarshipDetails.NumberOfStudents}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setScholarshipDetails({
                      ...scholarshipDetails,
                      NumberOfStudents: parseInt(e.target.value),
                    })
                  }
                  variant="outlined"
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
                  disabled={loading.submit}
                  sx={{ 
                    borderRadius: 1.5, 
                    px: 4,
                    boxShadow: '0 4px 14px rgba(45, 206, 101, 0.25)'
                  }}
                >
                  {loading.submit ? <CircularProgress size={24} color="inherit" /> : "Add Scholarship Details"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Divider sx={{ mb: 2 }}>
                <Typography variant="subtitle1" color="primary.main" fontWeight={500}>
                  Payment Information
                </Typography>
              </Divider>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField
                  required
                  label="Total Amount"
                  name="totalAmount"
                  type="number"
                  value={paymentDet.totalAmount}
                  onChange={handlePaymentChange}
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
                  required
                  label="Amount Paid"
                  name="amountPaid"
                  type="number"
                  value={paymentDet.amountPaid}
                  onChange={handlePaymentChange}
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
                  label="Discount Percentage"
                  name="discountPercent"
                  type="number"
                  value={paymentDet.discountPercent}
                  onChange={handlePaymentChange}
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
                  label="Discounted Price"
                  name="discountedPrice"
                  type="number"
                  value={paymentDet.discountedPrice}
                  onChange={handlePaymentChange}
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
                <InputLabel id="payment-status-label" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Payment Status
                </InputLabel>
                <Select
                  labelId="payment-status-label"
                  name="paymentStatus"
                  value={paymentDet.paymentStatus ? "true" : "false"}
                  onChange={(e) => {
                    setPaymentDetails({
                      ...paymentDet,
                      paymentStatus: e.target.value === "true",
                    });
                  }}
                  label="Payment Status"
                  sx={selectSx}
                  {...selectProps}
                >
                  <MenuItem value="true">Paid</MenuItem>
                  <MenuItem value="false">Unpaid</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Box display="flex" justifyContent="space-between">
                <Button 
                  variant="outlined" 
                  color="inherit"
                  onClick={() => setSdAdded(false)}
                  sx={{ borderRadius: 1.5, px: 3, color: 'white', borderColor: 'rgba(255, 255, 255, 0.5)' }}
                >
                  Back to Scholarship Details
                </Button>
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary"
                  disabled={loading.submit}
                  sx={{ 
                    borderRadius: 1.5, 
                    px: 4,
                    boxShadow: '0 4px 14px rgba(45, 206, 101, 0.25)'
                  }}
                >
                  {loading.submit ? <CircularProgress size={24} color="inherit" /> : "Add Payment Details"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </form>
    </PageLayout>
  );
};

export default AddScholarshipDetails;
