import { Link } from "react-router-dom";

import Img from '../../assets/404.gif';


const ErrorPage = () => {
    return (
        <div className='h-screen max-w-6xl mx-auto'>
        <img className='w-full' src={Img} alt="" />
        <div className='text-center mt-9'>
            <Link to='/'><button className='text-xl text-primary btn-link'>Go Home</button></Link>
        </div>
    </div>
    );
};

export default ErrorPage;