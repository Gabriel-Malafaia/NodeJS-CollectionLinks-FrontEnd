import { Link } from "react-router-dom";

const Dashboard = () => {
  const handleLogout = () => localStorage.clear();
  return (
    <>
      <Link onClick={handleLogout} to={"/login"}>
        Logout
      </Link>
    </>
  );
};

export default Dashboard;
