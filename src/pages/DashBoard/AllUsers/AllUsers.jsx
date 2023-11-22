import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    

    const {data: users =[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })

    const handleDeleteUser = user =>{
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
    
                axiosSecure.delete(`/users/${user._id}`)
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

      const handleMakeAdmin = user =>{
            axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res =>{
                refetch();
                if(res.data.modifiedCount > 0){
                    Swal.fire({
                        title: `${user.name} is an Admin now`,
                        showCancelButton: false,
                        timer: 1500,
                        icon: "success"
                      });
                }
            })
      }

    return (
        <section>
            <SectionTitle subHeading={'---How many??---'} heading={'MANAGE ALL USERS'}></SectionTitle>
            <div className="flex justify-evenly">
            <h2 className="text-3xl text-black font-bold">All Users:</h2>
            <h2 className="text-3xl text-black font-bold">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead className="mb-8 bg-orange-500">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        users.map((user, idx) => <tr key={user._id}>
            <th>{idx+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
            {
                user.role === 'admin' ? "Admin" : <button onClick={()=>handleMakeAdmin(user)} className="btn bg-warning btn-sm">
                <FaUser className="text-blue-500"></FaUser>
                </button>
            }
            </td>
            <td>
            <button onClick={()=>handleDeleteUser(user)} className="btn btn-ghost btn-sm">
            <FaTrashAlt className="text-red-600"></FaTrashAlt>
            </button>
            </td>
          </tr>)
    }
     
    </tbody>
  </table>
</div>
        </section>
    );
};

export default AllUsers;