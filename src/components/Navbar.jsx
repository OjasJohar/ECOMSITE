import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return(
    <div>
      <nav className="flex items-center h-20 max-w-6xl mx-auto justify-between">

      <NavLink to="/">
      <div className="ml-5">
        <h1 className="text-3xl text-green-400">ECOMSITE</h1>
      </div>
      </NavLink>

      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>

        <NavLink to="/cart">
          <div className="relative">
          <FaShoppingCart className="text-2xl"/>
          {
            cart.length>0 &&
            <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex
            justify-center items-center text-white animate-bounce rounded-full">
            {cart.length}</span>
          }
          
          </div>
        </NavLink> 
      </div>

      </nav>
    </div>
  )
}

export default Navbar;
