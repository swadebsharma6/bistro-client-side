import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    

    const {data: payments=[]} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async()=>{
            const res = await  axiosSecure.get(`/payments/${user.email}`);
            return res.data
        }
    })

    return (
        <div>
            <SectionTitle heading={'Payment History'}
            subHeading={`Total Payments : ${payments.length}`}
            ></SectionTitle>

            <div>
            
            <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead className="bg-orange-600 text-white">
                <tr>
                  <th>#</th>
                  <th>Price</th>
                  <th>TransactionId</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
              {
                payments.map((payment, idx) => <tr key={payment._id}>
                <th>{idx+1}</th>
                <td>$ {payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.date}</td>
                <td>{payment.status}</td>
              </tr> )
              }
                {/* row 1 */}
               
              </tbody>
            </table>
          </div>
            </div>
        </div>
    );
};

export default PaymentHistory;