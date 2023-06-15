import React from "react";
import useInstructors from "../../../Hooks/useInstructors";
import TopInstructorCard from "./TopInstructorCard";



const TopInstructor= () => {
  const [instructors] = useInstructors();
  const topInstructors = instructors.filter(
    (instructorItem) => instructorItem.numberOfStudents > 10
  );
//   console.log(topInstructors);
  return (
    <div className="my-20 bg-slate-200 rounded-lg shadow-2xl">
        <h1 className="text-center text-5xl font-semibold my-10 pt-5">Our Top <span className="text-orange-400"> Instructor</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-2 mt-5">
        {
            topInstructors.map(instructorItem=> <TopInstructorCard
            key={instructorItem.id}
            instructorItem={instructorItem}
            ></TopInstructorCard>)
        }
      </div>
    </div>
  );
};

export default TopInstructor;