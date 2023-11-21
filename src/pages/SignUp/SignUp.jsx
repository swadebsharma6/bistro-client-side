import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Firebase/Providers/AuthProvider";
import logo from '../../assets/login.svg';


const SignUp = () => {

  const {createUser, updateUser} = useContext(AuthContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data =>{
    console.log(data);
    createUser(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log('create user', user)
    })
    .catch(error =>{
      console.log(error.message);
      updateUser(data.name, data.photo)
      .then(() => {
        alert('User Profile Updated');
        reset()
      }).catch((error) => {
        console.log(error.message)
      });
    })
  }

   

    return (
        <section>
        <Helmet>
        <title>Bistro || Signup</title>
        </Helmet>
        <div className="flex justify-center items-center h-[800px] bg-base-200 px-36 mt-10 rounded-xl">
        <div className="md:flex items-center ">
          <div className="md:flex-1 ">
            <img className='w-64' src={logo} alt="" />
          </div>
          <div className=" md:flex-1 shadow-2xl md:ml-8  rounded-xl bg-base-100">
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name"  {...register("name", { required: true} )} placeholder="name" className="input input-bordered"/>
                {errors.name && <span className="text-red-500">Name  is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="url" name="photo"  {...register("photo", { required: true} )}  placeholder="PhotoURL" className="input input-bordered"/>
                {errors.photo && <span className="text-red-500">photo  is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email"  {...register("email",  { required: true })} placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password"  {...register("password",  { required: true , minLength:6,  maxLength: 20})} placeholder="password" className="input input-bordered"/>
                {errors.password && <span className="text-red-500">Password is required</span>}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Sign UP</button>
              </div>
            </form>
            <p className="text-center font-bold pb-10">New to this site ? Please  <Link className="text-purple-500" to='/login'>Login</Link></p>

          </div>
        </div>
      </div> 
        </section>
    );
};

export default SignUp;