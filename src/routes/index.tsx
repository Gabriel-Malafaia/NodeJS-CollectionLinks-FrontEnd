import { Routes, Route, Navigate } from "react-router-dom";
import { UserContextProvider } from "../contexts/UserContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
UserContextProvider;

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Navigate to={"login"} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<Navigate to={"login"} />} />
    </Routes>
  );
};

export default RoutesApp;
