import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseMenu from "../../../Hooks/UseMenu";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const ManageItems = () => {

    const [menu, ,refetch] = UseMenu();
    // console.log(menu.length)
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = item =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);
                if(res.data.acknowledged){
                    refetch();
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "item has been deleted",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      
                }


                
            }
          });
    }

    return (
        <section>
            <SectionTitle subHeading={'---Hurry Up!---'} heading={'MANAGE ALL ITEMS'}></SectionTitle>

            <div>
            <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-primary text-white">
                <tr>
                  <th> 
                     #
                  </th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              {
                menu.map((item, idx) =>  <tr key={item._id}>
                    <th>
                      {idx+1}
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
                    <td>{item.price}</td>
                    <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button  className=" btn-lg">
                    <FaEdit className="text-red-600"></FaEdit>
                    </button>
                    </Link>
                    </td>
                    <td>
                    <button onClick={()=>handleDeleteItem(item)} className="btn btn-ghost btn-lg">
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                    </td>
                  </tr> )
              }
                {/* row 1 */}
              </tbody>     
            </table>
          </div>
            </div>
        </section>
    );
};

export default ManageItems;