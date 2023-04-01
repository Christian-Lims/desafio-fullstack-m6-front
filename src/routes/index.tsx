import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/Dashboard" />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
