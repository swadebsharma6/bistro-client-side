import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../LayOut/DashBoard";
import Main from "../LayOut/Main";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import Cart from "../pages/DashBoard/DashBoard/Cart/Cart";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Secret from "../pages/Shared/Secred/Secret";
import SignUp from "../pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/menu',
          element:<Menu></Menu>
        },
        {
          path: '/order/:category',
          element:<Order></Order>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/signup',
          element:<SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivetRoute><Secret></Secret></PrivetRoute>
        }
      ]
    },
    {
      path:'/dashboard',
      element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
      children:[
        {
          path: 'cart',
          element: <Cart></Cart>
        },


        // admin routes
        {
          path:'/dashboard/users',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);