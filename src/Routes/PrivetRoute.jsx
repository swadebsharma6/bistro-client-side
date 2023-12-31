import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivetRoute = ({children}) => {
    const {user, loading} = useAuth();
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