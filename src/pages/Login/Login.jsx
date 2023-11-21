// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

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
            console.log('login  user', user);
            Swal.fire({
              title: "Good job!",
              text: "User Login Successfully!",
              icon: "success"
            });
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
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-start">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
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