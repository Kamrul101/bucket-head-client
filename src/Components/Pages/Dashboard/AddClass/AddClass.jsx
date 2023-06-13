import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';

const AddClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user}= useAuth();

    const onSubmit = data =>{
        console.log(data);
        const {}= data;
    }
    return (
        <div className="bg-[#e7e5e4] p-5 rounded-lg w-1/2   mb-5">
      <h2 className="text-4xl font-extrabold text-center py-4">
        <span className="text-green-700">ADD CLASS</span>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          {/* photo url */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo Url of Class </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo url"
                className="input input-bordered w-full"
                name="photo"
                required
              />
            </label>
          </div>
        </div>
        
        <div className="w-full mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Class name"
                className="input input-bordered w-full"
                {...register("name")}
                name="name"
                
                required
              />
            </label>
          </div>
        </div>
          <div className='w-full mb-4'>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="instructor name"
                className="input input-bordered w-full"
                {...register("instructorName")}
                name="instructorName"
                defaultValue={user?.displayName}
                
                
              />
            </label>
          </div>
          </div>
        
        <div className="w-full mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                placeholder="Instructor Email"
                className="input input-bordered w-full"
                {...register("instructorEmail")}
                name="instructorEmail"
                defaultValue={user?.email}
                
                
              />
            </label>
          </div>
        </div>
          <div className='w-full '>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                placeholder="Available seats"
                className="input input-bordered w-full"
                {...register("availableSeats")}
                name="availableSeats"
                required
              />
            </label>
          </div>
          </div>
        {/* price and ratings */}
        <div className="w-full mb-10 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                placeholder="$price"
                className="input input-bordered w-full"
                {...register("price")}
                name="price"
                required
              />
            </label>
          </div>
          
        </div>
        
        <input
          className="btn btn-block btn-ghost bg-green-900 text-white text-xl"
          type="submit"
          value="Submit New Class"
        />
      </form>
    </div>
    );
};

export default AddClass;