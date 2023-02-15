import DashFavorite from "../components/Dashboard/Favoritos";
import DashHome from "../components/Dashboard/Home";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./privateRoute";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashContextProvider } from "../contexts/DashContext";
import DashHeader from "../pages/Dashboard/Header";

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
              <DashHeader />
            </PrivateRoute>
          </DashContextProvider>
        }
      >
        <Route
          path="/dashboard"
          element={<Navigate to={"/dashboard/home"} />}
        />
        <Route path="/dashboard/home" element={<DashHome />} />
        <Route path="/dashboard/favoritos" element={<DashFavorite />} />
      </Route>
      <Route path="*" element={<Navigate to={"login"} />} />
    </Routes>
  );
};

export default RoutesApp;
