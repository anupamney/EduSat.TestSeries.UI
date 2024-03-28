import LoginComponent from "./loginComponents/LoginComponent";
import DashboardComponent from "./Components/DashboardComponent";
import { Routes, Route, useNavigate } from "react-router-dom";
import RegisterComponent from "./loginComponents/RegisterComponent";
import { useEffect } from "react";

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path={"/dashboard"} element={<DashboardComponent />} />
      <Route path={"/" || "/login"} element={<LoginComponent />} />
      <Route path={"/register"} element={<RegisterComponent />} />
    </Routes>
  );
};

export default App;
