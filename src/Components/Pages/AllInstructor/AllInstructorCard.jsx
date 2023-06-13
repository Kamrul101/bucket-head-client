import React from "react";

const AllInstructorCard = ({ singleInstructor }) => {
  const { photo, instructorName, instructorEmail,numberOfStudents } = singleInstructor;
  return (
    <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl mb-5">
      <figure>
        <img src={photo} alt={instructorName} />
      </figure>
      <div className="card-body">
        
        <h2 className="card-title font-semibold">
          Instructor: {instructorName}
        </h2>
        
        <p className="text-gray-500 text-xl">Students: {numberOfStudents}</p>
        <p className="text-gray-500 text-xl">
          Instructor Email: {instructorEmail}
        </p>
        
      </div>
    </div>
  );
};

export default AllInstructorCard;
