import React from "react";
import useClasses from "../../../../Hooks/useClasses";
import useAuth from "../../../../Hooks/useAuth";
import { FaPenSquare, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageClass = () => {
  const [classes,refetch] = useClasses();
  const { user } = useAuth();
  const instructorClasses = classes.filter(
    (iClass) => iClass.instructorEmail === user.email
  );

  const handleDelete = (item)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://summer-school-server-two.vercel.app/class/${item._id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                  refetch();
                Swal.fire("Deleted!", 
                "Class deletes from cart.",
                  "success");
              }
            });
        }
      });
  }
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>#</label>
            </th>
            <th>Image</th>
            <th>Class</th>
            <th>Price</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {instructorClasses.map((item, index) => (
            <tr key={item._id}>
              <th>
                <label>{index + 1}</label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.imageUrl} />
                    </div>
                  </div>
                </div>
              </td>
              <td>{item.className}</td>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-info text-white ">
                  <FaPenSquare></FaPenSquare> Update
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(item)}
                  className="btn btn-error text-white"
                >
                  <FaTrash></FaTrash> Delete
                </button>
              </td>
            </tr>
          ))}

          {/* row 2 */}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClass;
