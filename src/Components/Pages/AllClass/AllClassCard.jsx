import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";

const AllClassCard = ({ singleClass }) => {
    const {user} = useContext(AuthContext);
    const [,refetch]=useCart();
  const { _id, imageUrl, className, price,instructorName, numberOfStudents,
    availableSeats
    } = singleClass;
    const handleAddToCart = singleClass=>{
        console.log(singleClass);
        if(user && user.email ){
          const cartItem ={itemId: _id,imageUrl,price,instructorName,className,email:user.email}
          fetch('http://localhost:5000/cart',{
            method: "POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(cartItem)
          })
          .then(res=> res.json())
          .then(data =>{
            if(data.insertedId){
              refetch();
              Swal.fire(
                'Good job!',
                'You added to cart',
                'success'
              )
            }
          })
        }
        else{
          Swal.fire(
            'Please Login!',
          )
        }
      }
  return (
    <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl mb-5">
      <figure>
        <img
          src={imageUrl}
          alt={className}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">{className}</h2>
        <h2 className="card-title font-semibold">Instructor: {instructorName}</h2>
        <p className="text-gray-500 text-xl">Price: ${price}</p>
        <p className="text-gray-500 text-xl">Students: {numberOfStudents}</p>
        <p className="text-gray-500 text-xl">Seats Available: {availableSeats}</p>
        <button onClick={()=>handleAddToCart(singleClass)} className="btn btn-info text-white text-xl">Book Now</button>
      </div>
    </div>
  );
};

export default AllClassCard;