import React from 'react';

const TopInstructorCard = ({instructorItem}) => {
    console.log(instructorItem);
    const { photo, instructorName, instructorEmail } = instructorItem;
    return (
        <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl mb-5">
      <figure>
        <img
          src={photo}
          alt={instructorName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">{instructorName}</h2>
        <p className="text-gray-500 text-xl">{instructorEmail}</p>
      </div>
    </div>
    );
};

export default TopInstructorCard;