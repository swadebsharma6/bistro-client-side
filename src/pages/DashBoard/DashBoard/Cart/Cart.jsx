import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useCart from "../../../../Hooks/useCart";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const Cart = () => {
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((total, item)=> total +item.price,0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.delete(`/carts/${id}`)
            .then(res =>{
                if(res.data.deletedCount >0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Deleted Successfully.",
                        icon: "success"
                      });
                }
                
            })
        }
      });
  }

  return (
    <section>
      <SectionTitle
        subHeading={"---My Cart---"}
        heading={"WANNA ADD MORE?"}
      ></SectionTitle>
      <div className="md:flex justify-around mb-10">
        <h3 className="text-3xl font-bold text-black">TotalOrders: {cart.length}</h3>
        <h3 className="text-3xl font-bold text-black">TotalPrice: ${totalPrice} </h3>
        <button className="btn btn-primary">Pay</button>
      </div>
      <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead className="bg-gray-500 text-white">
      <tr>
        <th>
          SL.
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        cart.map((item , idx)=>  <tr key={item._id}>
            <th>
              <label>
                {idx+1}
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
              {item.name}
            </td>
            <td>${item.price}</td>
            <th>
              <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-lg">
              <FaTrashAlt className="text-red-600"></FaTrashAlt>
              </button>
            </th>
          </tr>)
    }
      {/* row 1 */}
     
    </tbody>
    
  </table>
</div>
    </section>
  );
};

export default Cart;
