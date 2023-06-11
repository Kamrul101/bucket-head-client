import React from 'react';
import useClasses from '../../../Hooks/useClasses';
import TopClassesCard from '../../Shared/TopClasses/TopClassesCard';
import AllClassCard from './AllClassCard';

const AllClass = () => {
    const [classes] = useClasses();
    return ( 
        <div className='bg-black bg-opacity-90 -mt-10'>
            <div className=" rounded-lg  md:w-3/4 mx-auto">
        <h1 className="text-center text-white text-5xl font-semibold my-10 pt-5">All Our<span className="text-orange-400"> Classes</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-2 mt-5">
        {
            classes.map(singleClass=> <AllClassCard
            key={singleClass._id}
            singleClass={singleClass}
            ></AllClassCard>)
        }
      </div>
    </div>
        </div>
    );
};

export default AllClass;