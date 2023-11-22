// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import logo from '../../assets/login.svg';

import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate, } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Firebase/Providers/AuthProvider";

const Login = () => {
    const {logInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.pathname || '/'  

    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logInUser(email,password)
        .then(result => {
            const user = result.user;
            Swal.fire({
              title: "Good job!",
              text: "User Login Successfully!",
              icon: "success"
            });
            console.log('login  user', user);
            
           navigate(from, {replace: true})
            
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

 
 
    return (
        <section>
        <Helmet>
        <title>Bistro || login</title></Helmet>
        <div className="hero h-[800px] bg-base-200 mt-10 rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-start">
            <h1 className=" md:text-4xl text-center font-bold mb-10">Login now!</h1>
            <img className='w-64' src={logo} alt="" />
          </div>
          <div className="card flex-shrink-0 md:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center font-bold pb-10">New to this site ? Please  <Link className="text-purple-500" to='/signup'>SignUp</Link></p>
          </div>
        </div>
      </div>
        </section>
    );
};

export default Login;