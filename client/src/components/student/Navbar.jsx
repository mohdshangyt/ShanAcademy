import { useState } from "react";
import { Link } from "react-router-dom";
import shanAcadLogo from "../../assets/shanacadlogo.svg";
import user_icon from "../../assets/user_icon.svg"
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {isEducator} = useContext(AppContext);

  const {openSignIn} = useClerk();
  const { user } = useUser();
  
  const links = [
    { name: "Courses", to: "/course-list" },
    { name: "Educator Dashboard", to: "/educator" },
    { name: "My Enrollments", to: "/my-enrollments" },
  ];

  return (
    <div className="w-full flex justify-center mt-6 relative z-50">
      <nav
        className="flex items-center border border-slate-700 
        bg-black/95 backdrop-blur-xl
        px-8 py-3 rounded-full text-white text-sm
        w-[92%] max-w-6xl"
      >
        {/* LEFT: LOGO */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <img src={shanAcadLogo} alt="ShanAcademy" className="h-9 w-auto" />
            <span className="text-sm font-semibold tracking-wide
    text-sky-400
    drop-shadow-[0_0_10px_rgba(56,189,248,0.85)]
    group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,1)]
    transition-all duration-300"
    
  >
    Skills for the Real World
  </span>
        </Link>

        {/* CENTER LINKS */}
        {user && (
        <div className="hidden md:flex items-center gap-6 ml-10">
             {links
                  .filter((item) => {
                   // Rule 1: if link is only for students and user IS educator → hide
                 if (item.onlyForStudents && isEducator) return false
                 
                 return true
                  })
                  .map((item)=>(
                <Link
                 key={item.name}
                 to={item.to}
                  className="px-4 py-2 rounded-full text-lg font-medium text-slate-300 transition-all duration-300
                  hover:text-sky-400 hover:bg-white/10 hover:shadow-[0_0_18px_4px_rgba(56,189,248,0.35)]"
                >             
                {item.name}
              </Link> 
                  ))}
          </div>

        )}

        {/* RIGHT BUTTONS */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          {!user && ( 

           //is user then User button : else the Create acc button
            
            <button 
            onClick={ ()=> openSignIn()}
            className="bg-white text-black px-4 py-2 rounded-full font-medium
            shadow-[0_0_25px_6px_rgba(255,255,255,0.4)]
            hover:shadow-[0_0_35px_12px_rgba(255,255,255,0.5)]
            transition duration-300" 
          >
            Create Account
          </button> 
          
          )}
          {user && <UserButton/> }
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto text-gray-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* MOBILE MENU */}
        {open && (
          <div
            className="absolute top-20 left-1/2 -translate-x-1/2
            w-[95%] bg-black rounded-2xl
            flex flex-col items-center gap-4 py-6 md:hidden"
          >
            { user &&
             links
                .filter((item) => {
                  if(item.onlyForStudents && isEducator) return false
                  return true
                })
                .map((item)=>(

                  <Link
                   key={item.name}
                   to={item.to}
                   onClick={() => setOpen(false)}
                   className="hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}

            {!user && ( 
          <button onClick={()=> {
            setOpen(false);
            openSignIn();
          }} 
            className="md:hidden">
               <img
              src={user_icon}
                  alt="Profile"
                className="
                 h-9 w-9 rounded-full object-cover ring-2 ring-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)] transition "
     
    />
  </button>
            )}
            {/*USER LOGGED IN THEN clerk User button comes up */}
            {user && <UserButton/>}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
