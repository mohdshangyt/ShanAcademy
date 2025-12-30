import { Outlet } from "react-router-dom";
import Navbar from "../../components/student/Navbar";

const Layout = () => {
  return (
    <div>
      {/* Navbar / Header goes here */}
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default Layout;
