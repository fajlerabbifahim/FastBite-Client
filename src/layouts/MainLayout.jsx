import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';
const MainLayout = () => {
  return (
    <div className=''>
      {/* <h1>hello</h1> */}
      <Navbar></Navbar>
      {/* <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div> */}
      <div >
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
