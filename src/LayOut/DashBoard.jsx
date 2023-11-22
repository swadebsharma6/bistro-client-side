import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaPhone, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";


const DashBoard = () => {

    const [cart] = useCart();

    return (
        <section className="md:flex">
            <div className="md:w-64 md:min-h-screen bg-orange-400">
            <ul className="menu">
                <li> 
                <NavLink to='/dashboard/userHome'>
                <FaHome></FaHome>
                Home</NavLink>
                </li>
                <li> 
                <NavLink to='/dashboard/reservation'>
                <FaCalendar></FaCalendar>
                Reservation</NavLink>
                </li>
                <li> 
                <NavLink to='/dashboard/cart'>
                <FaShoppingCart></FaShoppingCart>
                My Cart ({cart.length})</NavLink>
                </li>
                <li> 
                <NavLink to='/dashboard/review'>
                <FaAd></FaAd>
                My Review</NavLink>
                </li>
                <li> 
                <NavLink to='/dashboard/booking'>
                <FaList></FaList>
                My Bookings</NavLink>
                </li>
                <div className="divider  divider-primary"></div>

                <li> 
                <NavLink to='/'>
                <FaHome></FaHome>
                Home</NavLink>
                </li>
                <li> 
                <NavLink to='/order/salad'>
                <FaBook></FaBook>
                Menu</NavLink>
                </li>
                <li> 
                <NavLink to='/order/salad'>
                <FaShoppingCart></FaShoppingCart>
                Shop</NavLink>
                </li>
                <li> 
                <NavLink to='/order/salad'>
                <FaPhone></FaPhone>
                Contact</NavLink>
                </li>
            </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </section>
    );
};

export default DashBoard;