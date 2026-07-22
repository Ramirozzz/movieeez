import { Outlet } from "react-router-dom";
import NavbarBottom from "../header/NavbarBottom";
import Navbar from "../header/Navbar";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
        <NavbarBottom />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
