import React from "react";
import useClasses from "../../../../Hooks/useClasses";

const AdminManageClass = () => {
  const [classes] = useClasses();

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
            <th>Approval</th>
            <th>Deny</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((item, index) => (
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
              <td><div>
                <p className="font-semibold">{item.className}</p>
                <p className="text-gray-500">{item.instructorName}</p>
                </div></td>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-info btn-sm text-white ">
                   Approve
                </button>
              </td>
              <td>
                <button
                  
                  className="btn btn-error btn-sm text-white"
                >
                  Deny
                </button>
                
              </td>
              <td>
                <button
                  
                  className="btn btn-accent btn-sm text-white"
                >
                 Feedback
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

export default AdminManageClass;
