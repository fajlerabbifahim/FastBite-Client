import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
const MainLayout = () => {
  return (
    <div className="">
      <div>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
