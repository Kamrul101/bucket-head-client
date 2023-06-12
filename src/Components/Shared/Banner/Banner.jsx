import React from 'react';
import img1 from '../../../assets/banner/banner1.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="bg-[#ecfeff] p-5 rounded-lg mb-5 mt-10 mx-2 md:mx-auto">
  <div className="flex flex-col md:flex-row items-center">
    <img src={img1} className="rounded-lg shadow-2xl md:w-1/2 w-full h-1/2 md:mr-8 " />
    <div>
      <h1 className="text-5xl font-bold">Welcome to <span className='text-orange-500'>Bucket Head</span></h1>
      <p className="py-6">We provide the best action figure toys for our beloved otaku's in the world. We have the largest collection in the world. We will try to provide you the best collection and product.</p>
      <button className="btn bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white"><Link to='/allClass'>See Courses</Link></button>
    </div>
  </div>
</div>
    );
};

export default Banner;