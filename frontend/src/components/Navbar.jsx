import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Registration", path: "/reservation" },
    { name: "About", path: "/about" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <nav className="fixed top-5 left-0 w-full z-50 px-6">
      <div className="relative flex items-center justify-center">

        <div className="absolute left-0 flex items-center">
          <NavLink to="/" className="group">
            <img
              src={logo}
              alt="BB Gym"
              className="
                w-15 h-15 invert
                transition-all duration-500
                group-hover:rotate-6 group-hover:scale-300
              "
            />
          </NavLink>
        </div>

        <div
          className="
            flex items-center gap-10
            px-8 py-3 rounded-xl

            
            backdrop-blur-2xl
            border border-white/70
            border-x-black/30
            bg-gradient-to-l
          from-[white]/30
          via-black/30 
          to-white/50
            shadow-lg shadow-white/20

            
          "
        >
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                  relative text-sm font-medium tracking-wide
                  transition-all duration-300

                  ${
                    isActive
                      ? "text-[#ccfd06]"
                      : "text-white/70 hover:text-[#ccfd06]"
                  }
                  after:content-['']
                  after:absolute after:left-1/2 after:-bottom-2
                  after:h-[2px] after:w-6
                  after:-translate-x-1/2
                  after:rounded-xl
                  after:bg-[#ccfd06]
                  after:scale-x-0
                  after:transition-transform after:duration-300
                  

                  hover:after:scale-x-100
                  ${isActive ? "after:scale-x-100" : ""}
                `
              }
            >
              {item.name}


              <span
                className={`
                  absolute -top-2 left-1/2 -translate-x-1/2
                  h-1.5 w-1.5 rounded-full
                  bg-[#ccfd06]
                  transition-all duration-300
                  ${item.path === location.pathname ? "opacity-100" : "opacity-0"}
                `}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
