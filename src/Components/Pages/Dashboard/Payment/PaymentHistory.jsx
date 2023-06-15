import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

const PaymentHistory = () => {
    const {user}=useAuth();
    const [payment,setPayment]= useState([]);
    useEffect(()=>{
        fetch(`https://summer-school-server-two.vercel.app/payments?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setPayment(data);
        })
    },[])
    console.log(payment);
    return (
        <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>#</label>
            </th>
            <th>ID</th>
            <th>Transaction ID</th>
            
          </tr>
        </thead>
        <tbody>
          {payment.map((item, index) => (
            <tr key={item._id}>
              <th>
                <label>{index + 1}</label>
              </th>
              
              <td>{item._id}</td>
              <td>{item.transactionId}</td>
              
              
              
            </tr>
          ))}

          {/* row 2 */}
        </tbody>
      </table>
    </div>
    );
};

export default PaymentHistory;