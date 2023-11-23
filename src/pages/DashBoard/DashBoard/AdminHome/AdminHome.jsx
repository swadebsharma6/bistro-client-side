import useAuth from "../../../../Hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth();

    return (
        <div>

           <h2>Hi, Welcome </h2> 
           {user  && <h3> user.displayName</h3>}

        </div>
    );
};

export default AdminHome;