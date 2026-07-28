import { Outlet } from "react-router-dom";
import NavbarBottom from "../header/NavbarBottom";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";

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

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
