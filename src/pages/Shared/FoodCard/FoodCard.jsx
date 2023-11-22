// import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";




const FoodCard = ({item}) => {
    const {_id, name, recipe, image,price}= item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const [, refetch] = useCart();

    const handleAddToCart = () =>{
      if(user && user.email){
        // console.log(user.email, food);
        const cartItem ={
            menuId: _id,
            email: user.email,
            name,
            price,
            image,
        };
        // send data to server
        axiosSecure.post(`/carts`, cartItem)
        .then(res =>{
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire(`${name} is added to Cart`);

            // refetch for update the cart items count
            refetch();
          }
        })

      }
      else{
        // give an alert
        Swal.fire({
          title: "You Are Not Login ?",
          text: "Please Login to add to the cart !",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login"
        }).then((result) => {
          if (result.isConfirmed) {
            //Send the user to Login page
            navigate('/login' , {state :{from:location}});
          }
        });
      }
    }
    return (
        <section>
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-2 rounded" >Price: ${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Recipe: {recipe}</p>
          
          <div className="card-actions justify-center">
            <button
            onClick={()=> handleAddToCart()}
             className="btn btn-primary bg-orange-300 btn-outline border-0 border-b-4">Add to Cart</button>
          </div>
        </div>
      </div> 
        </section>
    );
};

export default FoodCard;