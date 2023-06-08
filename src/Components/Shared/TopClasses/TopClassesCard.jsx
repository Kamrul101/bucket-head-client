import React from "react";

const TopClassesCard = ({ classItem }) => {
  const { imageUrl, className, price } = classItem;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
      <figure>
        <img
          src={imageUrl}
          alt={className}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>Price: ${price}</p>
        
      </div>
    </div>
  );
};

export default TopClassesCard;
