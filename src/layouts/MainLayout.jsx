import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import CartLogo from "../Components/CartLogo/CartLogo";
import Navbar from "../components/Navbar/Navbar";
const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="fixed top-20 right-16 z-[2000]">
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
