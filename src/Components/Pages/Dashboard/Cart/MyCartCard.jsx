import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const MyCartCard = ({item,index,handleDelete}) => {
    const {imageUrl,className,price}=item;
    return (
        <tr>
              <td>
                {index + 1}
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={imageUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {className}
              </td>
              <td className='text-right'>${price}</td>
              <td>
                <button onClick={()=>handleDelete(item)} className="btn btn-ghost bg-red-700 btn-md text-white"><FaTrashAlt></FaTrashAlt></button>
              </td>
            </tr>
            
    );
};

export default MyCartCard;