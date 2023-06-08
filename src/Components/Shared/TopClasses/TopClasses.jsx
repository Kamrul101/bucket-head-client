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
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
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
