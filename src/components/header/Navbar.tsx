import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { IoInvertModeOutline } from "react-icons/io5";
import { IoInvertMode } from "react-icons/io5";
import { useTheme } from "../../hooks/useTheme";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { dark, changeTheme } = useTheme();

  return (
    <nav className="fixed top-0 z-30 w-full">
      <div className="relative flex items-center justify-between py-6 px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <Link
            className="text-[1.65rem] md:text-3xl text-font font-primary "
            to="/"
          >
            Movieeez
          </Link>
          <div className="text-accent pb-0.5">
            <FaPlay className="text-xl" />
          </div>
        </div>
        {/* Navbar links*/}
        <NavLinks />
        <div className="flex gap-4 md:gap-5">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "text-accent" : "text-font"
            }
          >
            <FiSearch size={26} className=" transition-all duration-300" />
          </NavLink>

          {dark ? (
            <IoInvertMode
              className="text-accent cursor-pointer"
              size={26}
              onClick={() => {
                changeTheme();
              }}
            />
          ) : (
            <IoInvertModeOutline
              className="text-accent cursor-pointer"
              size={26}
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
