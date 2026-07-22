import { NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const NavbarBottom = () => {
  return (
    <nav className="bg-bg-dark fixed bottom-0 w-full lg:hidden">
      <div className="flex justify-around items-center pt-3 pb-4 border-t border-white/10">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-font font-bold" : "text-muted"
          }
        >
          <div className="flex flex-col items-center gap-1 cursor-pointer group pt-[2px]">
            <div>
              <MdHome size={21} />
            </div>
            <div className="text-xs tracking-[0.03em]">Home</div>
          </div>
        </NavLink>

        <NavLink
          to={"movies"}
          className={({ isActive }) =>
            isActive ? "text-font font-bold" : "text-muted"
          }
        >
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <div>
              <IoIosPlay size={23} />
            </div>
            <div className="text-xs tracking-[0.03em]">Movies</div>
          </div>
        </NavLink>

        <NavLink
          to={"trending"}
          className={({ isActive }) =>
            isActive ? "text-font font-bold" : "text-muted"
          }
        >
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <div>
              <IoIosPlay size={23} />
            </div>
            <div className="text-xs tracking-[0.03em] text-muted">Trending</div>
          </div>
        </NavLink>

        <NavLink
          to={"search"}
          className={({ isActive }) =>
            isActive ? "text-font font-bold" : "text-muted"
          }
        >
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <div>
              <FiSearch size={23} />
            </div>
            <div className="text-xs tracking-[0.03em]">Search</div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavbarBottom;
