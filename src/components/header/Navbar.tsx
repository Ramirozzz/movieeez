import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
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
      className={`fixed top-0 z-30 w-full py-4 md:py-6 px-4 md:px-8 lg:px-16 ${
        navbarScrolled
          ? "bg-bg/90 backdrop-blur-md shadow-lg !py-3  "
          : "bg-transparent "
      }`}
    >
      <div className="relative flex items-center justify-between">
        <Link
          className="text-[1.75rem] md:text-3xl text-font font-primary "
          to="/"
        >
          <div className="flex items-center gap-1">Movieeez</div>
        </Link>

        <NavLinks />
        <div className="flex gap-3 md:gap-4">
          <NavLink
            to="/search"
            aria-label="Search movies"
            className={({ isActive }) =>
              isActive ? "text-accent" : "text-font"
            }
          >
            <div className="bg-white/15 p-1.5 rounded-full">
              <FiSearch
                aria-hidden="true"
                size={18}
                className=" transition-all duration-300"
              />
            </div>
          </NavLink>

          <button
            type="button"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={changeTheme}
            className="text-accent cursor-pointer"
          >
            {dark ? (
              <IoInvertMode aria-hidden="true" size={30} />
            ) : (
              <IoInvertModeOutline aria-hidden="true" size={30} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
