import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import CartLogo from "../Components/CartLogo/CartLogo";
import Navbar from "../components/Navbar/Navbar";
import ChatBot from "../pages/ChatBot.jsx/ChatBot";
const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="fixed top-20 right-[4%] z-[20]">
        <CartLogo></CartLogo>
      </div>

      <main className="min-h-[calc(100vh-556px)]">
        <Outlet />
      </main>
      <div className="fixed bottom-10 right-10 z-[2001]">
        <ChatBot/>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
