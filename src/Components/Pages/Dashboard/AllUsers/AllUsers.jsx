import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt, FaUserShield, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const AllUsers = () => {
//todo handle delete
    const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleMakeAdmin = user=>{
    fetch(`https://summer-school-server-two.vercel.app/users/admin/${user._id}`,{
        method: "PATCH"
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} made admin`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }
  const handleMakeInstructor = user=>{
    fetch(`https://summer-school-server-two.vercel.app/users/instructor/${user._id}`,{
        method: "PATCH"
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} made instructor`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }
  const handleDelete = user =>{

  }
  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold">Total users:{users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                users.map((user,index) =><tr key={user._id}>
                    <th>{index+1}</th>
                    <td><div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div></td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{
                        user.role === 'admin'? <span className="mr-2 text-xl">Admin</span> :<button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost text-2xl bg-orange-700 btn-md text-white mr-2"><FaUserShield></FaUserShield></button> 
                        }
                        {
                        user.role === 'instructor'? <span className="mr-2 text-xl">Instructor</span> : <button onClick={()=>handleMakeInstructor(user)} className="btn btn-ghost text-2xl bg-orange-700 btn-md text-white"><FaUserTie></FaUserTie></button> 
                        }</td>
                    
                
              <td><button onClick={()=>handleDelete(user)} className="btn btn-ghost bg-red-700 btn-md text-white text-2xl"><FaTrashAlt></FaTrashAlt></button></td>
                  </tr>)
            }
            
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
