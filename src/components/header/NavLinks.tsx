import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../constants/navLinks";

const NavLinks = () => {
  return (
    <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 text-base lg:flex">
      {NAV_LINKS.map((link) => {
        const Icon = link.icon;

        return (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm  transition-all duration-300 ${
                  isActive
                    ? "text-font font-semibold bg-white/15 px-4 py-2 rounded-full"
                    : "text-muted/80 px-4 py-2 hover:text-font hover:bg-white/15 rounded-full"
                }`
              }
            >
              <Icon size={23} />
              <span>{link.label}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
