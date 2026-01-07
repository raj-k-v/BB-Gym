import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Registration", path: "/reservation" },
    { name: "About", path: "/about" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <nav className="fixed top-4 left-0 w-full z-50 px-6">
      <div className="relative flex items-center">

        {/* LOGO (LEFT) */}
        <NavLink to="/" className="z-50">
          <img
            src={logo}
            alt="BB Gym"
            className="w-11 h-11 invert"
          />
        </NavLink>

        {/* DESKTOP NAV (CENTERED) */}
        <div
          className="
            hidden md:flex items-center gap-12
            px-10 py-4
            bg-black
            border border-white/10
            shadow-[0_10px_40px_rgba(0,0,0,0.8)]
            absolute left-1/2 -translate-x-1/2
          "
        >
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                  relative text-xs font-extrabold uppercase tracking-widest
                  transition-colors duration-300
                  ${
                    isActive
                      ? "text-[#ccfd06]"
                      : "text-white/70 hover:text-[#ccfd06]"
                  }

                  after:content-['']
                  after:absolute after:left-0 after:-bottom-2
                  after:h-[2px] after:w-full
                  after:bg-[#ccfd06]
                  after:scale-x-0
                  after:origin-left
                  after:transition-transform after:duration-300
                  hover:after:scale-x-100
                  ${isActive ? "after:scale-x-100" : ""}
                `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* HAMBURGER (RIGHT) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto flex flex-col gap-1.5 z-50"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>

        {/* MOBILE MENU */}
        <div
          className={`
            fixed top-0 left-0 w-full h-screen
            bg-black
            flex flex-col items-center justify-center gap-10
            transition-transform duration-300
            ${open ? "translate-y-0" : "-translate-y-full"}
          `}
        >
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                  text-2xl font-extrabold uppercase tracking-widest
                  ${
                    isActive
                      ? "text-[#ccfd06]"
                      : "text-white/70 hover:text-[#ccfd06]"
                  }
                `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
