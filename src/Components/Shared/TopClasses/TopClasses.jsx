import React from "react";
import useClasses from "../../../Hooks/useClasses";
import TopClassesCard from "./TopClassesCard";

const TopClasses = () => {
  const [classes] = useClasses();
  const topClasses = classes.filter(
    (classItem) => classItem.numberOfStudents > 10
  );
  console.log(topClasses);
  return (
    <div className="my-20 bg-slate-200 rounded-lg">
        <h1 className="text-center text-5xl font-semibold my-10 pt-5">Our Most <span className="text-orange-400">Popular Classes</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-2 mt-5">
        {
            topClasses.map(classItem=> <TopClassesCard
            key={classItem.id}
            classItem={classItem}
            ></TopClassesCard>)
        }
      </div>
    </div>
  );
};

export default TopClasses;
