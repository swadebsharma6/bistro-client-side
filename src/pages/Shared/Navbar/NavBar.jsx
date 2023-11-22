import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Firebase/Providers/AuthProvider";
import useCart from "../../../Hooks/useCart";

const NavBar = () => {

  const {user, logOutUser} = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut =()=>{
    logOutUser()
    .then(()=>{})
    .catch(error=>console.log(console.error(error.message)))
  }

    const navLinks = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li>
          <Link to='/'>
             <FaShoppingCart></FaShoppingCart>
          <div className="badge badge-secondary">+{cart.length}</div>
          </Link>
        </li>
        {user 
          ? 
          <li><button onClick={handleLogOut} className="btn btn-sm btn-secondary "> LogOut </button></li>
         :
         <li><Link to='/login'>Login</Link></li>
        }
        
        
    
    </>

    return (
        <div>
        <div className="navbar fixed z-20 bg-opacity-30 bg-slate-600 py-4 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
            </ul>
          </div>
          <Link className="btn  text-white text-xl">BISTRO BOSS</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white px-1">
          {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        { user && <p className="text-white font-bold">{user.displayName}</p>}
        <div className="avatar">
        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
         { user && <img src={user.photoURL} />}
        </div>
      </div>
        </div>
      </div>
        </div>
    );
};

export default NavBar;