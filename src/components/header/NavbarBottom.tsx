import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../constants/navLinks";
import { FiSearch } from "react-icons/fi";

const NavbarBottom = () => {
  return (
    <nav className=" fixed bottom-0 z-30 w-full bg-bg border-t border-white/10 lg:hidden">
      <div className="flex items-center justify-around px-2 py-3">
        {NAV_LINKS.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${
                  isActive
                    ? "font-bold text-font"
                    : "text-muted/70 hover:text-font"
                }`
              }
            >
              <Icon aria-hidden="true" size={22} />
              <span className="text-xs tracking-[0.03em] mt-0.5">
                {link.label}
              </span>
            </NavLink>
          );
        })}
        <div className="flex flex-col items-center gap-1 cursor-pointer group">
          <NavLink
            to={"search"}
            className={({ isActive }) =>
              isActive ? "text-font font-bold" : "text-muted/70"
            }
          >
            <div className="flex flex-col items-center gap-1 cursor-pointer group">
              <div>
                <FiSearch aria-hidden="true" size={22} />
              </div>
              <div className="text-xs tracking-[0.03em]">Search</div>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBottom;
