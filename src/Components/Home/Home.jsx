import React from 'react';
import Slider from '../Shared/Slider/Slider';
import TopClasses from '../Shared/TopClasses/TopClasses';


const Home = () => {
    return (
        <div className='md:w-3/4 md:mx-auto'>
            <Slider></Slider>
            <TopClasses></TopClasses>
        </div>
    );
};

export default Home;