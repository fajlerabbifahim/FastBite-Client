import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/footer";
const MainLayout = () => {
  return (
    <div className="">
      <div>
        <Outlet />
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default MainLayout;
