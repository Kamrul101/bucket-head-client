import React from "react";

const AllClassCard = ({ singleClass }) => {
  const { imageUrl, className, price,instructorName, numberOfStudents,
    availableSeats
    } = singleClass;
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
        <button className="btn btn-info text-white text-xl">Book Now</button>
      </div>
    </div>
  );
};

export default AllClassCard;