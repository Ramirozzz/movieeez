import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../constants/navLinks";
import { FiSearch } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="relative flex items-center justify-between  py-6 px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <Link
            className=" text-xl lg:text-2xl uppercase text-font font-primary "
            to="/"
          >
            Moviez
          </Link>

          <div className="text-accent">
            <FaPlay size={20} />
          </div>
        </div>

        {/* Center Links */}
        <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-12 text-base">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-font font-semibold"
                    : "text-muted/80 hover:text-font transition-all duration-300"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex gap-4 md:gap-5">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "text-accent" : "text-font"
            }
          >
            <FiSearch
              size={26}
              className="hover:text-accent transition-all duration-300"
            />
          </NavLink>

          <VscColorMode className="text-accent cursor-pointer" size={26} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
