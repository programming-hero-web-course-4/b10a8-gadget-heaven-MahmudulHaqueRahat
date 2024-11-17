import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

 

const MainLayout = () => {
    return (
        <div>
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