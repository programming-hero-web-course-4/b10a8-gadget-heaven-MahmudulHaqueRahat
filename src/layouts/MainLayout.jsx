import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

const MainLayout = () => {
    return (
        <div>
            <ToastContainer/>
            {/* nav */}
            <Nav></Nav>
             {/* <div className="min-h-[calc(100vh-395px)]"> */}
                <Outlet />
              
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;