import React from 'react';
import Slider from '../Shared/Slider/Slider';
import TopClasses from '../Shared/TopClasses/TopClasses';
import Banner from '../Shared/Banner/Banner';


const Home = () => {
    return (
        <div className='md:w-3/4 md:mx-auto'>
            <Banner></Banner>
            <Slider></Slider>
            <TopClasses></TopClasses>
        </div>
    );
};

export default Home;