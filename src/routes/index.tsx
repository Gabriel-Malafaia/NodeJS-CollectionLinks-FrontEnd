import { Routes, Route, Navigate } from "react-router-dom";
import { DashContextProvider } from "../contexts/DashContext";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./privateRoute";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Navigate to={"login"} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route
        path="/dashboard"
        element={
          <DashContextProvider>
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          </DashContextProvider>
        }
      />
      <Route path="*" element={<Navigate to={"login"} />} />
    </Routes>
  );
};

export default RoutesApp;
