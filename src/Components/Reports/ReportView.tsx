import { useEffect, useState } from "react";
import { getSchoolList } from "../../service/dataService";
import { ISchoolDetails } from "../../Models/ISchoolDetails";
import SchoolList from "../SchoolsList";
import { Button, Box, Paper, Typography, Container } from "@mui/material";
import ViewListIcon from '@mui/icons-material/ViewList';

export const ReportView: React.FC = () => {
  const [reportData, setReportData] = useState<ISchoolDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  const fetchData = async () => {
    setLoading(true);
    const data = await getSchoolList();
    setReportData(data?.data || []);
    setLoading(false);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth={false} sx={{ py: 3, px: { xs: 1, sm: 3 } }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: 2,
          backgroundColor: 'rgba(18, 18, 24, 0.7)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden'
        }}
      >
        <Box display="flex" alignItems="center" mb={3}>
          <ViewListIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
          <Typography variant="h4" component="h1" fontWeight="600" color="#ffffff">
            School List
          </Typography>
        </Box>
        
        {reportData.length > 0 && <SchoolList schoolList={reportData} />}
        {reportData.length === 0 && !loading && (
          <Box display="flex" flexDirection="column" alignItems="center" py={8}>
            <Typography variant="h6" color="text.secondary" mb={3}>
              No schools found
            </Typography>
            <Button 
              onClick={fetchData}
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ViewListIcon />}
            >
              Fetch Schools List
            </Button>
          </Box>
        )}
        {loading && (
          <Box display="flex" justifyContent="center" py={8}>
            <Typography variant="h6" color="text.secondary">
              Loading...
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default ReportView;
