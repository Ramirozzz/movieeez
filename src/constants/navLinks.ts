import { HiFilm } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import { TbCopyPlus } from "react-icons/tb";

export const NAV_LINKS = [
  {
    label: "Home",
    to: "/",
    icon: MdHome,
  },
  {
    label: "Movies",
    to: "/movies",
    icon: HiFilm,
  },
  {
    label: "Watchlist",
    to: "/watchlist",
    icon: TbCopyPlus,
  },
];
