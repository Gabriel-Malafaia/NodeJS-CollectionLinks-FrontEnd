import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
  const token = localStorage.getItem("@collectionLinkToken");

  return token != null ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
