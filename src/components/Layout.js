import { Outlet } from "react-router-dom";
import MainNavbar from "./Navbar";
import Footer from "./Footer";
import "./Layout.css";

const Layout = () => {
  console.log("Layout rendered");
    return (
      <>
        <MainNavbar />
        <div className="main-content">
          <Outlet /> 
        </div>
        <Footer />
      </>
    );
  };
  
  export default Layout;