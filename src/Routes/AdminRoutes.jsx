import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoutes = ({children}) => {
    const [user, loading] = useAuth();
    const [isAdmin,isAdminLoading ] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <div className="text-center"><span className="loading  text-6xl loading-ring loading-lg text-purple-500"></span></div>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate  to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoutes;