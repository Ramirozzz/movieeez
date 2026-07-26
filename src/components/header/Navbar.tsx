import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../constants/navLinks";
// import { MdHome } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-30 w-full">
      <div className="relative flex items-center justify-between py-6 px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-accent ">
            <FaPlay size={21} />
          </div>
          <Link className=" text-xl lg:text-xl text-font font-primary " to="/">
            Movieeez
          </Link>
        </div>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-base lg:flex">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-sm transition-all duration-300 ${
                      isActive
                        ? "text-font font-semibold bg-white/16 px-4 py-2.5 rounded-full"
                        : "text-muted/80 hover:text-font"
                    }`
                  }
                >
                  <Icon size={20} />
                  <span>{link.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>

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
