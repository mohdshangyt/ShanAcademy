import { Outlet } from "react-router-dom";
import Navbar from "../../components/educator/Navbar";
import Sidebar from "../../components/educator/Sidebar";
import NavbarEdu from "../../components/educator/Navbar";

{/**THE MAIN HOME PAGE FOR EDUCATOR IS Educator.jsx */}
const LayoutEdu = () => {
  return (
    <div className="flex min-h-screen">
      
      {/* Main area */}
      <div className="flex-1 flex flex-col">
        <NavbarEdu />
        {/* Sidebar */}
        <Sidebar />
        
        <Outlet/>
      </div>

    </div>
  );
};

export default LayoutEdu;
