import LoginComponent from "./loginComponents/LoginComponent";
import DashboardComponent from "./Components/DashboardComponent";
import { Routes, Route, useNavigate } from "react-router-dom";
import RegisterComponent from "./loginComponents/RegisterComponent";
import { useEffect } from "react";
import AddSchool from "./Components/AddSchool";
import Navbar from "./layouts/NavBar";
import AddTeachers from "./Components/AddTeachers";

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      const currURL = window.location.pathname;
      if (currURL === "/" || currURL === "/login" || currURL === "/register") {
        navigate("/dashboard");
      } else navigate(currURL);
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Routes>
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
