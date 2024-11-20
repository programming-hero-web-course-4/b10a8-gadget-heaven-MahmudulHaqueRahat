import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const isWhiteBackground = location.pathname === '/Statistics' || location.pathname === '/Dashboard'||location.pathname === '/Dashboard/Cart'||location.pathname === '/Dashboard/Whishlist';

  return (
    <div className={`navbar ${isWhiteBackground ? 'bg-white' : 'bg-purple-700 mt-3'} w-11/12 mx-auto rounded-t-lg `}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <Link to='/' className={isWhiteBackground ? 'text-black' : 'text-white'}>Home</Link>
            <Link to='/Statistics' className={isWhiteBackground ? 'text-black' : 'text-white'}>Statistics</Link>
            <Link to='/Dashboard' className={isWhiteBackground ? 'text-black' : 'text-white'}>Dashboard</Link>
          </ul>
        </div>
        
        <Link to='/' className={`btn btn-ghost text-xl font-bold ${isWhiteBackground ? 'text-black' : 'text-white'}`}>
          Gadget Heaven
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <Link to='/' className={isWhiteBackground ? 'text-black' : 'text-white'}>Home</Link>
          <Link to='/Statistics' className={isWhiteBackground ? 'text-black' : 'text-white'}>Statistics</Link>
          <Link to='/Dashboard' className={isWhiteBackground ? 'text-black' : 'text-white'}>Dashboard</Link>
        </ul>
      </div>
      
      <div className="navbar-end">
        <a className={`text-3xl ${isWhiteBackground ? 'text-black' : 'text-white'}`}><CiShoppingCart /></a>
        <a className={`text-2xl pl-4 pr-4 ${isWhiteBackground ? 'text-black' : 'text-white'}`}><FaHeart /></a>
        
      </div>
    </div>
  );
};

export default Nav;
