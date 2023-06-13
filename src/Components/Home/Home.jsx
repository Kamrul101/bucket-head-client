import React from 'react';
import Slider from '../Shared/Slider/Slider';
import TopClasses from '../Shared/TopClasses/TopClasses';
import Banner from '../Shared/Banner/Banner';
import TopInstructor from '../Shared/TopInstructor/TopInstructor';


const Home = () => {
    return (
        <div className='md:w-3/4 md:mx-auto'>
            <Banner></Banner>
            <Slider></Slider>
            <TopClasses></TopClasses>
            <TopInstructor></TopInstructor>
        </div>
    );
};

export default Home;