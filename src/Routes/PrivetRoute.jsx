import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Firebase/Providers/AuthProvider";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="text-center"><span className="loading  text-6xl loading-ring loading-lg text-purple-500"></span></div>
    }

    if(user){
        return children
    }

    return <Navigate  to='/login' state={{from:location}} replace></Navigate>
};

export default PrivetRoute;