import React from 'react';

import useInstructors from '../../../Hooks/useInstructors';
import AllInstructorCard from './AllInstructorCard';

const AllInstructor = () => {
    const [instructors] = useInstructors();
    return ( 
        <div className='bg-black bg-opacity-90 -mt-10'>
            <div className=" rounded-lg  md:w-3/4 mx-auto">
        <h1 className="text-center text-white text-5xl font-semibold my-10 pt-5">All Our<span className="text-orange-400"> Classes</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-2 mt-5">
        {
            instructors.map(singleInstructor=> <AllInstructorCard
            key={singleInstructor._id}
            singleInstructor={singleInstructor}
            ></AllInstructorCard>)
        }
      </div>
    </div>
        </div>
    );
};

export default AllInstructor;