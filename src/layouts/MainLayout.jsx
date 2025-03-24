import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CartLogo from "../Components/CartLogo/CartLogo";
const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="sticky top-[100px] z-[900]">
        <CartLogo></CartLogo>
      </div>

      <main className="min-h-[calc(100vh-556px)]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
