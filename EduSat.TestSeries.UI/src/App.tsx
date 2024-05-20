import LoginComponent from "./loginComponents/LoginComponent";
import DashboardComponent from "./Components/DashboardComponent";
import { Routes, Route, useNavigate } from "react-router-dom";
import RegisterComponent from "./loginComponents/RegisterComponent";
import { useEffect } from "react";
import AddSchool from "./Components/AddSchool";
import Navbar from "./layouts/NavBar";
import AddTeachers from "./Components/AddTeachers";
import AddScholarshipDetails from "./Components/AddScholarshipDetails";
import { isLoggedIn } from "./utils/utils";

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) {
      const currURL = window.location.pathname;
      if (currURL === "/" || currURL === "/login" || currURL === "/register") {
        navigate("/dashboard");
      } else navigate(currURL);
    } else navigate("/");
  }, [navigate]);

  return (
    <>
      {isLoggedIn() && <Navbar />}
      <Routes>
        <Route path={"/add-scholarship"} element={<AddScholarshipDetails />} />
        <Route path={"/add-teachers"} element={<AddTeachers />} />
        <Route path={"/add-school"} element={<AddSchool />} />
        <Route path={"/dashboard/*"} element={<DashboardComponent />} />
        <Route path={"/" || "/login"} element={<LoginComponent />} />
        <Route path={"/register"} element={<RegisterComponent />} />
      </Routes>
    </>
  );
};

export default App;
