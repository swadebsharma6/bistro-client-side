
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();


    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
            console.log('googleUser', result.user);
            const userInfo ={
                email: result.user?.email,
                name: result.user.displayName
            }
            // send data to database
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })


        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <div className="text-center pb-6">
        <button onClick={handleGoogleSignIn} className="btn btn-primary btn-sm">
        <FaGoogle className=" text-purple-600"></FaGoogle>
        Google
      </button>
        </div>
    );
};

export default SocialLogin;