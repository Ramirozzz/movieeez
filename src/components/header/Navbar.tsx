import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { IoInvertModeOutline } from "react-icons/io5";
import { IoInvertMode } from "react-icons/io5";
import { useTheme } from "../../hooks/useTheme";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [navbarScrolled, setNavBarScrolled] = useState(false);
  const { dark, changeTheme } = useTheme();

  // handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavBarScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-30 w-full py-6 px-4 md:px-8 lg:px-16 ${
        navbarScrolled
          ? "bg-bg/90 backdrop-blur-md shadow-lg !py-4  "
          : "bg-transparent "
      }`}
    >
      <div className="relative flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <Link
            className="text-[1.65rem] md:text-3xl text-font font-primary "
            to="/"
          >
            Movieeez
          </Link>
          <div className="text-accent pb-1">
            <FaPlay className="text-lg md:text-xl" />
          </div>
        </div>
        {/* Navbar links*/}
        <NavLinks />
        <div className="flex gap-3 md:gap-4">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "text-accent" : "text-font"
            }
          >
            <div className="bg-white/15 p-2 rounded-full">
              <FiSearch size={15} className=" transition-all duration-300" />
            </div>
          </NavLink>

          {dark ? (
            <IoInvertMode
              className="text-accent cursor-pointer"
              size={30}
              onClick={() => {
                changeTheme();
              }}
            />
          ) : (
            <IoInvertModeOutline
              className="text-accent cursor-pointer"
              size={30}
              onClick={() => {
                changeTheme();
              }}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
