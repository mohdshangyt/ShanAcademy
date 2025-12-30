import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link, NavLink } from "react-router-dom";
import shanacadlogo from "../../assets/shanacadlogo.svg";
import { dummyEducatorData } from "../../assets/assets";
import profile_img from '../../assets/profile_img.png'
const NavbarEdu = () => {
  const educatorData = dummyEducatorData
  const {user} = useUser();
  const navItemClass = ({ isActive }) =>
    `
    px-4 py-1 rounded-full text-lg font-medium
    transition-all duration-300
    ${
      isActive
        ? "bg-emerald-500/20 text-emerald-400 shadow-[0_0_18px_4px_rgba(16,185,129,0.45)]"
        : "text-slate-300 hover:text-emerald-400 hover:bg-white/10 hover:shadow-[0_0_18px_4px_rgba(16,185,129,0.35)]"
    }
  `;

  return (
    <div className="w-full flex justify-center mt-6 relative z-50">
      <nav
        className="
          flex items-center justify-between
          border border-slate-700
          bg-black/95 backdrop-blur-xl
          px-8 py-3 rounded-full
          text-white text-sm 
          w-[92%] max-w-6xl
        "
      >
        {/* LEFT: LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={shanacadlogo} alt="ShanAcademy" className="h-9 w-auto" />
          <span
            className="
              text-sm font-semibold tracking-wide
              text-emerald-400
              drop-shadow-[0_0_10px_rgba(16,185,129,0.85)]
              group-hover:drop-shadow-[0_0_16px_rgba(16,185,129,1)]
              transition-all duration-300
            "
          >
            EXPLORE
          </span>
        </Link>

        {/* CENTER LINKS */}
        <div className="hidden md:flex items-center gap-6 ml-10">
          <NavLink to="/educator" end className={navItemClass}>
            Dashboard
          </NavLink>

          <NavLink to="/educator/add-course" className={navItemClass}>
            Add Course
          </NavLink>

          <NavLink to="/educator/my-courses" className={navItemClass}>
            My Courses
          </NavLink>

          <NavLink to="/educator/students-enrolled" className={navItemClass}>
            Students
          </NavLink>
        </div>

        {/* RIGHT */}
       <div className="flex items-center gap-4">
           {user ? (
            <UserButton />
           ) : (
             <img
              src={profile_img}
              alt="Profile" className="h-9 w-9 rounded-full object-cover opacity-80"
      
              />
  )}
</div>
      </nav>
    </div>
  );
};

export default NavbarEdu;
