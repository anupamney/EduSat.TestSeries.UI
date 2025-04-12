import LoginComponent from "./loginComponents/LoginComponent";
import DashboardComponent from "./Components/DashboardComponent";
import { Routes, Route, useNavigate } from "react-router-dom";
import RegisterComponent from "./loginComponents/RegisterComponent";
import { useEffect } from "react";
import AddSchool from "./Components/AddSchool";
import NavBar from "./layouts/NavBar";
import AddTeachers from "./Components/AddTeachers";
import AddScholarshipDetails from "./Components/AddScholarshipDetails";
import { isLoggedIn } from "./utils/utils";
import ReportView from "./Components/Reports/ReportView";
import { Box } from "@mui/material";

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currURL = window.location.pathname;
    if (isLoggedIn()) {
      if (currURL === "/" || currURL === "/login" || currURL === "/register") {
        navigate("/schools");
      } else navigate(currURL);
    } else {
      if (currURL !== "/login" && currURL !== "/register") {
        navigate("/login");
      } else {
        navigate(currURL);
      }
    }
  }, [navigate]);

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      bgcolor: 'background.default' 
    }}>
      {isLoggedIn() && <NavBar />}
      <Box sx={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        mt: isLoggedIn() ? '64px' : 0 // Add top margin when the navbar is present
      }}>
        <Routes>
          <Route path={"/add-scholarship"} element={<AddScholarshipDetails />} />
          <Route path={"/add-teachers"} element={<AddTeachers />} />
          <Route path={"/add-school"} element={<AddSchool />} />
          <Route path={"/schools"} element={<ReportView />} />
          <Route path={"/dashboard/*"} element={<DashboardComponent />} />
          <Route path={"/login"} element={<LoginComponent />} />
          <Route path={"/"} element={<LoginComponent />} />
          <Route path={"/register"} element={<RegisterComponent />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
