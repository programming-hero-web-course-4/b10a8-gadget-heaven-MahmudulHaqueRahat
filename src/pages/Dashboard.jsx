//import { FaSort } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="">
            <div className="text-center items-center py-2 bg-purple-700">
                <div>
                    <h1 className="text-4xl text-white font-bold pb-3">Statistics</h1>
                    <p className="pb-2 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                </div>

                <div className="flex justify-center gap-4">
                    <div> <Link to='/Dashboard/Cart'><button className="btn  w-16 ">Cart</button></Link></div>
                    <div><Link to='/Dashboard/Whishlist'><button className="btn w-16 ">Wishlist</button></Link></div>
                </div>
            </div>
 

            {/* Card that will be added */}
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;