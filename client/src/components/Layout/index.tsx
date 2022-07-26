import { Outlet } from "react-router-dom";
import { NavbarProps } from "../../types";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../../styles/Layout.css";

const Layout = ({ loggedUser, setLoggedUser }: NavbarProps) => {
  return (
    <>
      <Navbar loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
