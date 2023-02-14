import { Link } from "react-router-dom";
import DashHeader from "../../components/Dashboard/Header";

const Dashboard = () => {
  const handleLogout = () => localStorage.clear();
  return (
    <>
      <DashHeader />
    </>
  );
};

export default Dashboard;
